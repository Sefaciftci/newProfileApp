import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({task}) => {
  return (
    <div>
      {task.map((taskItem)=>{
        return <TaskItem taskItem={taskItem} key={taskItem.id} />
      })}
    </div>
  )
}

export default TaskList
