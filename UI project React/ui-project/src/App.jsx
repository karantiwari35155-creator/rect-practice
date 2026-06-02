import React from 'react'
import Section1 from './component/section-1/Section1'
import Section2 from './component/section-2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: '',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: '',
      tag: 'Underserved',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1663134310533-fc3b59225810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGJhbmtpbmclMjBtZW4lMjB2ZXJ0aWNhbCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color: '',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1608377733063-8c76fdd47e41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGJhbmtpbmclMjBtZW4lMjB2ZXJ0aWNhbCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color: '',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1580894745015-755d26d02f26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      intro: '',
      color: '',
      tag: 'Underbanked',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1683133282266-13c620466f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
      intro: '',
      color: '',
      tag: 'Underbanked',
    },

  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App