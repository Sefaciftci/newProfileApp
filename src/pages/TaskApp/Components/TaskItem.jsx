import React, { useState } from 'react'
import CreateTask from './CreateTask';

const TaskItem = ({taskItem, deleteTask ,onUpdated }) => {

  //state imi ile ekranda düzenlemeye tıklanıp tıklanmadığını anlıyıcaz
  const [taskShow , setTaskShow] = useState(false);

  const handleDelete = () => {
    deleteTask(taskItem.id);
  }
  const handleEdit = () => {
    setTaskShow(true)
  }
  const handleUpdate = (id, editTitle, editContent) => {
    //güncelleme işlemimiz bitti false döneriz
    setTaskShow(false)
    //app.jsx e yollarız editlemek için
    onUpdated(id,editTitle,editContent);
  }

  return (

    <>
    {taskShow 
     ? <CreateTask taskItem={taskItem} taskShow={taskShow} onUpdate={handleUpdate} /> : 
     <div className='taskItemBox'>
         <div className='taskItemContent'>
         <h3>Task Title</h3>
         <p>{taskItem.title}</p>
         </div>
         <div className='taskItemContent'>
         <h3>Task Content</h3>
         <p>{taskItem.content}</p>
         </div>
         <div className='taskItemBtnBox'>
           <button className='addjustBtn' onClick={handleEdit}>Adjusting</button>
           <button className='deleteBtn' onClick={handleDelete} >Delete</button>
         </div>
         
     </div>}
  
    </>
    
  )
}

export default TaskItem
