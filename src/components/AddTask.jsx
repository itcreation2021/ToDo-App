import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContextProvider'

const AddTask = () => {

  const [taskName, setTaskName] = useState("")
  const {addTask} = useContext(TaskContext)
   

  const handleAdd = () => {
    // console.log(taskName);
    addTask({
      id: Date.now(),
      name: taskName,
      completed:false,
    })
    setTaskName('')
  }

  const handleKeyPress = (e) => {
    if ( taskName && e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <section className=" w-full">
      <div className=" flex items-center justify-between gap-3">
        <input
          value={taskName} onChange={(e)=>setTaskName(e.target.value)}
          type="text" onKeyPress={handleKeyPress}
          placeholder='Add a new Task...'
          className=" w-[90%] text-white focus:outline-none bg-transparent border border-secondary shadow-secondary rounded-lg px-3 py-2 placeholder:text-secondary/50"
        />
        <button disabled={!taskName} onClick={handleAdd} className=" w-[10%] p-1 bg-secondary rounded-lg text-white text-2xl"> + </button>
      </div>
    </section>
  );
}

export default AddTask