function ToDoItem({todoItems,delItem,toggle}) {

 return (
    <>

        <div key={todoItems.id} className="items">
          <input type="checkbox" onClick={()=>toggle(todoItems.id)} />
          <span style={{textDecoration:todoItems.check?"line-through":"none"}} >{todoItems.task}   </span>
          <button className="delBtn" onClick={()=>{delItem(todoItems.id)}}>Remove</button>
        </div>
    </>
  )
}

export default ToDoItem