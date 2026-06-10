import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const data = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(data.data)
    console.log(data.data)
  }

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className='text-gray-300 test-xs absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (ele, idx) {
      return <div key={idx}>
        <Card ele={ele} />
      </div>

    })
  }

  return (
    <div className='bg-black  overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
            }
          }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer text-sm active:scale-90'>prev</button>
        <h4>page {index}</h4>
        <button onClick={() => {
          setIndex(index + 1)
        }} className='bg-amber-400 cursor-pointer text-sm active:scale-90 text-black rounded px-4 py-2 font-semibold'>next</button>
      </div>
    </div>
  )
}

export default App