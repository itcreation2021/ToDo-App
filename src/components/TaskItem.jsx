import React, { useContext, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TaskContext } from '../context/TaskContextProvider';
import EditTask from './EditTask'
const TaskItem = ({ task: { id, name, completed } }) => {

  const { toggleComplete, deleteTask } = useContext(TaskContext)
  const [isEditing,setIsEditing] = useState(false)

  return (
    <>
      {isEditing ? (
        <EditTask name={name} id={id} setIsEditing={setIsEditing} />
      ) : (
        <div
          className={`bg-secondary/10 border-l-4 transition-all duration-300 ${
            completed ? "border-green-400" : "border-yellow-400"
          } rounded-lg p-3 shadow my-5 flex items-center justify-between`}
        >
          <div className=" flex items-center space-x-2">
            <input
              type="checkbox"
              onClick={() => toggleComplete(id)}
              className=" text-secondary w-3 h-3 bg-transparent"
            />
            <h3
              className={`${
                completed ? "line-through text-purple-200/50" : ""
              } text-purple-200 `}
            >
              {name}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-300"
            >
              <FaEdit />
            </button>
            <button onClick={() => deleteTask(id)} className="text-red-600">
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskItem