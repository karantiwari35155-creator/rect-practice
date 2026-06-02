import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
    console.log(props);
    
  return (
    <div id='right' className='h-full p-6 flex gap-10 rounded-4xl flex-nowrap overflow-x-auto  w-2/3'>
        {props.users.map((elem,idx) => {
            return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default Rightcontent