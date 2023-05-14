import logo from './logo.svg';
import './styles/App.css';
import { useState } from "react"
import ShowMatrix from './pages/components/showMatrix.jsx';

function App() {
  let lines = []
  const [matrix, setMatrix] = useState([])
  const [readValues, setReadValues] = useState(true)

  const setLine = (index, event) => {
    lines[index] = event.target.value
  }

  const calcParity = () => {
    lines.forEach(e => {
      let iNum = 0
      const lineToBeAdded = []

      for(let char of e) {

        if(char === '1') iNum+=1
        lineToBeAdded.push(char)
      }

      (iNum % 2 === 0) ? lineToBeAdded.push('0') : lineToBeAdded.push('1')

      matrix.push(lineToBeAdded)
    })

    const lineToBeAdded = []
    for(let i = 0; i < 4; i++) {
      let iNum = 0

      for(let j = 0; j < matrix.length; j++) {
        if(matrix[j][i] === '1') iNum+=1
      }
    
      (iNum % 2 === 0) ? lineToBeAdded.push('0') : lineToBeAdded.push('1')
    }
    matrix.push(lineToBeAdded)
    console.log(matrix)
    setReadValues(false)
  }

  const again = () => {
    setReadValues(true)
    setMatrix([])
  }

  if(readValues) {
    return (
      <div className="App">
        <h1>Digite as sequências de 3 bits</h1>
        <input type="text" onChange={e => setLine(0, e)}/>
        <input type="text" onChange={e => setLine(1, e)}/>
        <input type="text" onChange={e => setLine(2 , e)}/>
        <button onClick={() => calcParity()}>calcular paridade</button>
      </div>
    )
  } else {
    return (<ShowMatrix matrix={matrix} again={again}></ShowMatrix>)
  }
}

export default App;
