import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([])
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  // localStorage.clear()
  sessionStorage.clear();
  localStorage.setItem('class', 'A sec');
  localStorage.getItem(name);
  localStorage.removeItem('class')

  const user = {
    username: "karan",
    age: 18,
    course: "BCA",
  };

  localStorage.setItem("user", JSON.stringify(user));
  const parsed_data = JSON.parse(localStorage.getItem('user'));
  console.log(parsed_data)

  // API - Using fetch
  // const getData = async() => {
  //  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //  const data = await response.json();
  //  console.log(data);
  // }

  // API - using axios library
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response)
    setData(response.data);
  }

  // useEffect
  function aChanging() {
    console.log("A is changing")
  }

  function bChanging() {
    console.log("B is changing")
  }

  useEffect(() => {
    bChanging()
  },[b]);

  useEffect(() => {
    aChanging()
  },[a]);

  return (
    <div>
      <button onClick={getData}>click</button>
      <div>
       {data.map((ele,idx) => {
        return <h3>hello, {ele.author} {idx}</h3>
       })}

       <br /><br /><br /><br /><br />
       <h1>A is {a}</h1>
       <h1>B is {b}</h1>
       <button onClick={()=>{
              setA(a+1);
       }}>change A</button>
       <button onClick={()=>{
              setB(b+1);
       }}>Change B</button>
       
      </div>
    </div>
  )
}

export default App