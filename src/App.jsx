import React from 'react'
import AddTask from './components/AddTask'
import FilterNav from './components/FilterNav'
import TaskList from './components/TaskList'
import TaskContextProvider from './context/TaskContextProvider'


const App = () => {
  return (
    <TaskContextProvider>
      <main className=" bg-primary text-secondary h-screen w-screen flex justify-center">
        <div className=" w-2/3 lg:w-1/3 h-1/3 mt-20">
          <h1 className=" font-bold text-3xl mb-8 text-white text-center">
            TODO APP
          </h1>
          <AddTask />
          <FilterNav />
          <TaskList />
        </div>
      </main>
    </TaskContextProvider>
  );
}

export default App