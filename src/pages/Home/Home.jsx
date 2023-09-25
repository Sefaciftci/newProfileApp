import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import './home.css'
import {useNavigate} from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className='homeContainer'>
      <div className='homeTitle'>
          <h1>React Projects</h1>
      </div>
      <div className='btnBox'>
          <button className='navigateBtn'><BsChevronLeft/></button>
          <button  className='navigateBtn' onClick={()=>navigate('/newProfile')}><BsChevronRight/></button>
      </div>
    </div>
  )
}

export default Home
