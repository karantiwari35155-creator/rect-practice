import React from 'react'
import RightCardcontent from './RightCardcontent'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden shrink-0 relative rounded-4xl w-80 '>
        <img className='h-full object-cover w-full' src={props.img} alt="" />
        <RightCardcontent id={props.id} color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCard