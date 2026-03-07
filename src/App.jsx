import { useState } from 'react'
import './App.css'
import BoardHeader from './BoardHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {
  let [todo, setTodo] = useState([])
  let [complete, setComplete] = useState(0)
  function handleAdd(value) {
    if (value != '') {
      let newtask = {
        id: Date.now(),
        task: value,
        check: false
      }
      setTodo([...todo, newtask])
    }
  }
  function delFunc(item) {

    setTodo(todo.filter(items => items.id != item))

  }
  function toggleFunc(id) {
    console.log("toggle");
    let update = todo.map((items) => {
      if (items.id == id) {
        return { ...items, check: !items.check }
      }
      return items

    })
    setTodo(update)
    finishTask(update)
  }
  function finishTask(update) {
    let completedCount = update.filter(item => item.check == true).length
    setComplete(completedCount)

  }
  return (
    <div className='card'>
      <BoardHeader count={todo.length} completeCount={complete} />
      <TodoInput onAdd={handleAdd} />
      {todo && <TodoList todos={todo} del={delFunc} toggle={toggleFunc} />}
    </div>
  )
}

export default App
