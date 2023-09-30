import React from 'react'

const TaskItem = ({taskItem}) => {
  return (
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
          <button className='addjustBtn'>Adjusting</button>
          <button className='deleteBtn'>Delete</button>
        </div>
        
    </div>
  )
}

export default TaskItem
