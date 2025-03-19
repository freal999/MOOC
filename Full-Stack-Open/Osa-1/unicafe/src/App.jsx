import { useState } from 'react'
import './App.css'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)

  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th colSpan={3}>give feedback</th>
          </tr>
          <tr>
            <td><MyButton onClick={handleGood} text="good" /></td>
            <td><MyButton onClick={handleNeutral} text="neutral" /></td>
            <td><MyButton onClick={handleBad} text="bad" /></td>
          </tr>
          <tr>
            <th colSpan={3}>statistics</th>
          </tr>

          <Statistics good={good} neutral={neutral} bad={bad} />

        </tbody>
      </table>
    </>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return <tr><td colSpan={3}>no feedback given</td></tr>
  } else {
    return (<>

      <tr><Statistic_line text="good" value={good} /></tr>
      <tr><Statistic_line text="neutral" value={neutral} /></tr>
      <tr><Statistic_line text="bad" value={bad} /></tr>
      <tr><Statistic_line text="all" value={good + neutral + bad} /></tr>
      <tr><Statistic_line text="average" value={(good - bad) / 3 / 3} /></tr>
      <tr><Statistic_line text="positive" value={good / (good + neutral + bad) * 100} suffix="%" /></tr>

    </>)
  }
}
const Statistic_line = ({ text, value, suffix }) => {
  return (
    <><td colSpan={2}>{text}</td><td>{value}{suffix}</td></>
  )
}

const MyButton = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text} </button>
)

export default App
