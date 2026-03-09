import React from "react"
const BoardHeader=React.memo(({count,completeCount}) =>{
  return (
    <div className="heading">
        <h1>Smart ToDo App</h1>
        <span>Finished Task: {completeCount}</span>
        <span>Count:{count}</span>
        
    </div>
  )
})

export default BoardHeader