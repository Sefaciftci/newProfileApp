import React from 'react'

const TaskItem = ({taskItem}) => {
  return (
    <div>
        <div>
        <h3>Task Title</h3>
        <p>{taskItem.title}</p>
        </div>
        <div>
        <h3>Task Content</h3>
        <p>{taskItem.content}</p>
        </div>
        
    </div>
  )
}

export default TaskItem
