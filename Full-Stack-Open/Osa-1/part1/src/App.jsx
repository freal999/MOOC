// _react_buttons
import { useState } from "react" // import state hook

const App = () => {

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [all_clicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(all_clicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft+right);
  }
  const handleRightClick = () => {
    setAll(all_clicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left+updatedRight);
  }
  return (
    <div>
      <Button onClick={handleLeftClick} text=<>left {left}</>/>
      <Button onClick={handleRightClick} text=<>right {right}</>/>
      <p>total {total}</p>
      <History all_clicks={all_clicks} />
    </div>
  );
}
const History = (props) => {
 return (
  <>
  {
  props.all_clicks.length == 0 ? (
  <>the app is used by pressing the buttons</>
  ):(
  <>button press history: {props.all_clicks.join(" ")}</>)
  }
  </>
 )
}
const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)
export default App