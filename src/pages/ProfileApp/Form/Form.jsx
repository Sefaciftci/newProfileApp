import React,{useState} from 'react'
import './form.css';
import { BsFillPlusSquareFill } from "react-icons/bs";

const Form = ({addProfile}) => {

  const [profileName , setProfileName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfiels = {
      id:Math.random(),
      profileName
    }
    addProfile(newProfiels);
    setProfileName("")
  }
  
  return (
      <form className='formContainer' onSubmit={handleSubmit} >
        <input
        type='text'
        placeholder='Add new profile'
        onChange={(e)=>setProfileName(e.target.value)}
        value={profileName}
        />
        <button><BsFillPlusSquareFill className='addIcon' size='2.3rem'
        /></button>
      </form>
  )
}

export default Form
