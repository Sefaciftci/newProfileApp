import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({task, deleteTask ,onUpdated }) => {
  return (
    <div className='taskListBox'>
      {task.map((taskItem)=>{
        return <TaskItem onUpdated={onUpdated} deleteTask={deleteTask} taskItem={taskItem} key={taskItem.id} />
      })}
    </div>
  )
}

export default TaskList
