import React, { useState } from 'react'
import CreateTask from './Components/CreateTask'
import TaskList from './Components/TaskList'

const MainTask = () => {

    const [task,setTask] = useState([]);
    const createTask = (title,content) => {
        //spread ile onceki tasklarıaldık ve yenisinide oluşturduk
        const createTasks = [
            ...task, 
            {
            id:Math.random(),
            title,
            content
        }]
        setTask(createTasks);
    }
    
  return (
    <div className='mainTask'>
      <h1 className='mainTaskTitle'>Create Your Task</h1>
      <CreateTask createTask ={createTask}/>
      <TaskList task={task}/>
    </div>
  )
}

export default MainTask
