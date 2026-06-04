import { CloudMoonRain } from 'lucide-react';
import React from 'react';
import { useState } from 'react';


const App = () => {
  const [num, setnum] = useState(0);
  const [obj, setobj] = useState({user:'karan', age:20});
  const [title, setTitle] = useState('');

  const increase = () => {
    setnum(num + 1);
  }

  const decrease = () => {
    setnum(num - 1);
  }

  const jumpbyfive = () => {
    setnum(num + 5)
  }

  const btnClicked = () => {
    const newObj = {...obj};
    newObj.user ="subbu";
    newObj.age = 19;
    setobj(newObj);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(`form Submited by ${title}`);
    setTitle("");
  };


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jumpbyfive}>increase 5</button>

      <br /><br /><br /><br /><br />
      <h1>{obj.user}, {obj.age}</h1>
      <button onClick={btnClicked}>click</button>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <form action="" onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App