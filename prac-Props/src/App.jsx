import React from 'react'
import Card from "./component/Card"

const App = () => {
  return (
    <div className="parent">
      
      <Card user="Aman" age={18} img='https://images.unsplash.com/photo-1780054694213-869dbdee8c9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'/>
      <Card user="Subbu" age={20} img='https://images.unsplash.com/photo-1778165657501-558e29e5e0c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D' />
      <Card user="Santhu" age={19} img='https://images.unsplash.com/photo-1779261309891-7ecf394d1452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTd8fHxlbnwwfHx8fHw%3D'/>
      
    </div>
  )
}

export default App