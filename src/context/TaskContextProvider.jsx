import React, { createContext, useState } from 'react'

export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [filter,setFilter]=useState('all')

  const addTask = (newTask) => {
    setTasks([...tasks,newTask])
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? { ...task,completed: !task.completed }:task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id ))
  }

  const editTask = (id,editTask) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task,name:editTask}: task ))
  }

  const filteredTasks = () => {
    if (filter === 'completed') {
      return tasks.filter(task=>task.completed)
    }
    return tasks;
  }

  return (
      <TaskContext.Provider value={{tasks,addTask,toggleComplete,deleteTask, editTask, filteredTasks,filter,setFilter}} >
          {children}
   </TaskContext.Provider>
  )
}

export default TaskContextProvider