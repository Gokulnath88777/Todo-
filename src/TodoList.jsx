import ToDoItem from "./ToDoItem"

function TodoList({todos,del,toggle,onToggle}) {
  return (
    <div  className="list">  
    <ol>
      {
     
      todos.map((items)=>
      <li key={items.id}>
        <ToDoItem  todoItems={items} delItem={del} toggle={toggle} />
      </li>)
      }
    </ol>
    </div>
  )
}

export default TodoList