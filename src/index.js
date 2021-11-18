import React from 'react'
import ReactDOM from 'react-dom'

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]

const numChecker = (num) =>{
  if(num === 0 || num === 2) return 1;
  if(num === 1) return -1;
  let flag = true;
  for(let i = 2; i < num; i++){
    if(num % i === 0) flag = false
  }
  if(flag) return 0
  if(!flag && num % 2 === 0){
    return 1
  } else {
    return -1
  }
}

// Country component
const Number = ({ number }) => {
  let color;
  switch(numChecker(number)) {
    case 1: color = "green"; break;
    case 0: color = "red"; break;
    case -1: color = "yellow"; break;
  }
  let styleName = `background-color:${color}`
  return (
    <div style={{backgroundColor:`${color}`,height:'100px', width:'100px'}}>
      <h1>{number}</h1>
    </div>
  )
}

// countries component
const Numbers = ({ numbers }) => {
  const numberList = numbers.map((number) => (
    <Number key={number} number={number} />
  ))
  return <div style={{display:'flex', width:'800px', flexWrap:'wrap'}}>{numberList}</div>
}
const App = () => (
  <div  className='container'>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
      <h1>30 Days Of React</h1>
      <p>Number Generator</p>
      <Numbers numbers={numbers} />
    </div>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)