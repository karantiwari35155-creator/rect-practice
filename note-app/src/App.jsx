import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask)

    setTitle("")
    setDetails("")
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen bg-black lg:flex text-white p-10'>

      <form action="" onSubmit={(e) => {
        submitHandler(e);
      }} className='flex lg:w-1/2 items-start flex-col  p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <div className='flex items-start mt-5 gap-4 w-1/2 flex-col'>
          {/* PEHLA INPUT */}
          <input
            type="text"
            placeholder='Enter task'
            className='px-5 w-full py-2 border-2 lg:w-4/2 rounded font-medium'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {/* DETAILED VALA INPUT */}
          <textarea
            type="text"
            placeholder='Enter details'
            className='p-5 w-full  h-30 px-5 py-2 lg:w-4/2  border-2 rounded font-medium'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button
            className='bg-white active:scale-95 lg:w-4/2 w-full text-black px-5 font-medium py-2 rounded'>Add notes</button>
        </div>
      </form>
      <div className=' p-10  items-start justify-start lg:w-1/2 lg:border-l-2 '>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>

          {task.map(function (ele, idx) {
            return <div key={idx} className='h-52 flex pt-3 pb-4 pl-8 justify-between flex-col w-40 p-4 text-black rounded-2xl bg-[url(data:image/png;base64,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)] bg-cover'>
              <div>
                <h3 className='leading-tight items px-10 underline underline-offset-8 text-xl font-bold'>{ele.title}</h3>
                <p className='mt-4 px-3.5 text-start leading-tight font-medium text-gray-500'>{ele.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full text-xs cursor-pointer active:scale-95 font-bold rounded pb-0.5  bg-red-600 text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App