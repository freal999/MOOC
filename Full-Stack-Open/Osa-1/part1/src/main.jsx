import ReactDOM from 'react-dom/client'
import App from './App'

let counter = 1;

console.log("main..")

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App counter={counter}/>)
