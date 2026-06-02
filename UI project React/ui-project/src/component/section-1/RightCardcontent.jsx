import React from 'react'

const RightCardcontent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full  flex flex-col p-8 justify-between'>
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>

            <div >
                <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, nulla doloribus! Vel deserunt quas tempora!</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardcontent