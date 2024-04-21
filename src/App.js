import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import TodoList  from './components/TodoList';
function App() {

 const [data,setData]=useState({});
 console.log(data);

  useEffect(() => {
    fetchData();
}, []);
// 'http://localhost:8081/todos'
const fetchData = () => {
  fetch('https://telling-ground-production.up.railway.app/todos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
};
  return (
    <div className="App">
<TodoList  data={data} />

    </div>
  );
}

export default App;
