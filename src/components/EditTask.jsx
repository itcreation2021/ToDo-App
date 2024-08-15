import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContextProvider';

const EditTask = ({ id,name, setIsEditing }) => {

  const [taskName,setTaskName] = useState(name)
  const { editTask } = useContext(TaskContext)
  
  const handleEdit = () => {
    editTask(id, taskName)

    setIsEditing(false)
  }

  return (
    <section className=" w-full">
      <div className=" flex items-center justify-between gap-3">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          className=" w-[90%] text-white focus:outline-none bg-transparent border border-secondary shadow-secondary rounded-lg px-3 py-2 placeholder:text-secondary/50"
        />
        <button
          onClick={handleEdit}
          className=" w-[10%] py-2 px-1 bg-secondary rounded-lg text-white text-lg"
        >
         Save
        </button>
      </div>
    </section>
  );
}

export default EditTask