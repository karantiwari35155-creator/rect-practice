import React from 'react'

const App = () => {
  const hello = (elm) =>{
    console.log(elm);
  }

const scroll =(val) => {
  if(val > 0){
    console.log(`sidha scrolling speed = ${val}`);
  }else{
    console.log(`ulta scrolling speed = ${val}`)
  } 
}
 
  return (
    <div onWheel={(ele) =>{
      scroll(ele.deltaY)
    }}>
      <button  onDoubleClick={() => {
        console.log("hello bacho!")
      }}>Click</button>
      <br />
      <input type="text" onChange={(ele) => {
        hello(ele.target.value);
      }} name="Enter ur name" id="" />

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App