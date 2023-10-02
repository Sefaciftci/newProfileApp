import React ,{ useState }from 'react'
import '../taskApp.css'

const CreateTask = ({createTask,taskItem,taskShow ,onUpdate}) => {

    const [title,setTitle] = useState(taskItem ? taskItem.title : '');
    const [content , setContent] = useState(taskItem ? taskItem.content : '');

    const handleSubmit = (event) => {
        event.preventDefault();
        //yani tıklandıysa
        if(taskShow){
          onUpdate(taskItem.id , title , content)
        }else{
          createTask(title,content)
        }
        setContent('')
        setTitle('');
    }
    

  return (
    <>
    {taskShow ? <div>
      <form  className='createTaskBox'>
        <input
        value={title}
        placeholder='change your title'
        onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
        rows="5"
        placeholder='change your task'
        value={content}
        onChange={((e)=>setContent(e.target.value))}
        />
        <button onClick={handleSubmit}>Edit</button>
      </form>
    </div>
    : 
    <div>
      <form  className='createTaskBox'  >
        <input
        value={title}
        placeholder='add your title'
        onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
        rows="5"
        placeholder='add your task'
        value={content}
        onChange={((e)=>setContent(e.target.value))}
        />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
    }
    </>
    
    
  )
}

export default CreateTask
