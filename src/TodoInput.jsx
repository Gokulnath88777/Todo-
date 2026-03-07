import {useRef} from 'react'

function TodoInput({onAdd}) {
  let inputRef=useRef()
  function handleSubmit()
  {
    onAdd(inputRef.current.value)
    inputRef.current.value=''
  }
  return (
      <div className='inputField'>
        <input ref={inputRef} type="text" />
        <button onClick={handleSubmit}>Add</button>
      </div>
  )
}

export default TodoInput