import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.ele.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
            <img className='h-full w-full object-cover' src={props.ele.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{props.ele.author}</h2>
        </a>
    </div>
  )
}

export default Card
