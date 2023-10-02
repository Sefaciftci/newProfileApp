import React, { useState,useEffect } from 'react'
import CreateTask from './Components/CreateTask'
import TaskList from './Components/TaskList'
import {useNavigate} from "react-router-dom"
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import axios from 'axios';

const MainTask = () => {
    const navigate = useNavigate();
    const [task,setTask] = useState([]);
    const createTask = async (title,content) => {

      //db post işlemi axios ile 
       const response = await axios.post('http://localhost:3004/tasks',{
          title,
          content
        })

        //spread ile onceki tasklarıaldık ve yenisinide oluşturduk
        const createTasks = [...task, response.data] //repsonse icindeki degerler
        setTask(createTasks);
    }  
    //yenileme durumunda get useEffect ile datamızı axios get ile cagırma
    const dataFetch = async() => {
      const response = await axios.get('http://localhost:3004/tasks');
      setTask(response.data);
    }
    useEffect(()=> {
      dataFetch();
    },[])

    //delete task 
    const deleteTask = async (id) => {
      //db de silinmesi için axios.delete isteği atarız id mizi kullanarak
      await axios.delete(`http://localhost:3004/tasks/${id}`);
      const deletedTask = task.filter((item)=>{
        return item.id !== id;
      })
      setTask(deletedTask);
    }

    //updated Task
    const onUpdated = async (id , editTitle , editContent) => {
      // put request ile db deki datamızı güncelleme
      await axios.put(`http://localhost:3004/tasks/${id}`,{
        title:editTitle,
        content:editContent
      });
      const editedTask = task.map((task) => {
        if(task.id === id ){
          return {id, title : editTitle , content : editContent}
        }
        return task; 
        })
        setTask(editedTask);
    }
    
  return (
    <div className='mainTask'>
      <h1 className='mainTaskTitle'>Create Your Task</h1>
      <CreateTask createTask ={createTask}/>
      <TaskList task={task} deleteTask= {deleteTask} onUpdated={onUpdated}/>
      <div className='btnBox taskBtnBox'>
          <button className='navigateBtn' onClick={()=>navigate('/imgSearch')}><BsChevronLeft fontWeight=''/></button>
          <button  className='navigateBtn' onClick={()=>navigate('/')}><BsChevronRight/></button>
      </div>
    </div>
  )
}

export default MainTask
