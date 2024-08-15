import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContextProvider';

const FilterNav = () => {
  const {tasks,filter,setFilter}=useContext(TaskContext)
  return (
    <section className=" flex items-center gap-3 text-md text-purple-200 my-8">
      <button
        onClick={() => setFilter("all")}
        className={` relative px-4 py-1 ${
          filter === "all" ? " bg-secondary/40" : " bg-secondary/10"
        } rounded-full`}
      >
        All <span
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5"
        >
          {tasks.length}
        </span>
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={` relative px-4 py-1 ${
          filter === "completed" ? " bg-secondary/40" : " bg-secondary/10"
        } rounded-full`}
      >
        {" "}
        Completed{" "}
        <span
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5"
        >
          {tasks.filter((task) => task.completed).length}

        </span>
       
      </button>
    </section>
  );
}

export default FilterNav