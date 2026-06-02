import React from 'react'
import Card from "./component/Card"
import Nav from "./component/Nav"

const App= () => {
  const user = 'Subbu'
  const age = 18;
  return (
    <>
        <Nav />
        <Card name="karan" para="nndsjanjcj  djsndasndj   jadsnnndnknsk"/>
        <Card name="Arun" para="nndsjanjcj  djsndasndj   jadsnnndnknsk"/>
        <Card name="Arun" para="nndsjanjcj  djsndasndj   jadsnnndnknsk"/>
    </>
    
  )
}

export default App
