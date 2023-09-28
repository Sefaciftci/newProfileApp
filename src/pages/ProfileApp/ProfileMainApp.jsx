import React,{useState} from 'react'
import './profileMain.css'
import Form from './Form/Form'
import ProfileList from './ProfileList/ProfileList'
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import {useNavigate} from "react-router-dom"

const ProfileMainApp = () => {
  const [profiles, setProfiles] = useState([]);
  const addProfile = (newProfile)=> {
    setProfiles((prevProfiel)=>[newProfile , ...prevProfiel]);
  }
  const navigate = useNavigate();
  return (
    <div className='mainDiv'>
      <h1>React New Profile App</h1>
      <div className='container'> 
      <Form addProfile={addProfile}/>
      <ProfileList profiles={profiles} setProfiles={setProfiles}/>
      </div>
      <div className='btnBox'>
          <button className='navigateBtn' onClick={()=>navigate('/')} ><BsChevronLeft/></button>
          <button  className='navigateBtn' onClick={()=>navigate('/imgSearch')} ><BsChevronRight/></button>
      </div>
    </div>
  )
}

export default ProfileMainApp
