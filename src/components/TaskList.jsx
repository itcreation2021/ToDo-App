import React, { useContext } from 'react'
import TaskItem from './TaskItem'
import { TaskContext } from '../context/TaskContextProvider'

const TodoList = () => {

  const {filteredTasks,tasks} = useContext(TaskContext)

  // console.log(tasks)
  return (
    <div className=" w-full my-3">
      {
        tasks.length > 0 ? (
          <>
            {filteredTasks().map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
        ): (
          <h1 className=" text-2xl text-center pt-20">There is no tasks !</h1>
            
        )
      }
      
    </div>
  );
}

export default TodoList