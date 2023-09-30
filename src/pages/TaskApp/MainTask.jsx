import React, { useState } from 'react'
import CreateTask from './Components/CreateTask'
import TaskList from './Components/TaskList'
import {useNavigate} from "react-router-dom"
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const MainTask = () => {
    const navigate = useNavigate();
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
      <div className='btnBox taskBtnBox'>
          <button className='navigateBtn' onClick={()=>navigate('/imgSearch')}><BsChevronLeft/></button>
          <button  className='navigateBtn' onClick={()=>navigate('/')}><BsChevronRight/></button>
      </div>
    </div>
  )
}

export default MainTask
