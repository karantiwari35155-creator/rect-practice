import React from 'react'

const App = () => {
  // localStorage.clear()
  sessionStorage.clear();
  localStorage.setItem('class','A sec');
  localStorage.getItem(name);
  localStorage.removeItem('class')
  
  const user = {
    username: "karan",
    age: 18,
    course: "BCA",
  };

  localStorage.setItem("user",JSON.stringify(user));
  const parsed_data = JSON.parse(localStorage.getItem('user'));
  console.log(parsed_data)
  return (
    <div>App</div>
  )
}

export default App