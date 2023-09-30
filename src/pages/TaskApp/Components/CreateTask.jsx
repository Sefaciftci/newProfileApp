import React ,{ useState }from 'react'
import '../taskApp.css'

const CreateTask = ({createTask}) => {

    const [title,setTitle] = useState('');
    const [content , setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        createTask(title,content)
        setContent('')
        setTitle('');
    }

  return (
    <div>
      <form  className='createTaskBox'  >
        <input
        value={title}
        placeholder='add your title'
        onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
        rows="5"
        placeholder='add your misson'
        value={content}
        onChange={((e)=>setContent(e.target.value))}
        />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  )
}

export default CreateTask
