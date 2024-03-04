
import { useState } from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState(``)
  const[output, setOutput] = useState([
    {id: 1, text: `task_1`,complated: true},
    {id: 2, text: `task_2`,complated: true}
  ]);

  console.log("update", output);

 function addTask (){
  setOutput(prev => [...prev,
    { id: prev.length + 1, text: input, complated: false}])

 }

function deleteTodo (todo_text ){
  setOutput( prev => prev.filter(item => item.text !== todo_text))

}
function checkTodo(todo_id){
  setOutput((prev) =>
  prev.map((item) =>{
    return item.id === todo_id ? {...item, complated: ! item.complated} : item;
  })
  )
}


 
  return (
    <>
      
      <input type='text' onChange={(e) => setInput( e.target.value)} />
      
      <button onClick={addTask}> click</button>
      
      <div>
        {output.map( (todo) => {
          return (
            <>
            <div style={{display: `flex`, gap:` 18px`}} key={todo.id}>
            <input type='checkbox' checked ={todo.complated} onChange={() => checkTodo(todo.id)}/>
            <li style={{listStyle: `none`,
             textDecoration: todo.complated ? " line-through" :  " none"}}>{todo.text}</li>
            <button onClick={() => deleteTodo(todo.text)}>delete</button>
            </div>
            </>
          )
        })}

      </div>

      

    </>
  )
}

export default App
