import React,{useEffect, useState} from 'react'
import ImgSearchBar from './Components/ImgSearchBar';
import axios from 'axios';
import ImgList from './Components/ImgList';
import './imgSearchApp.css';
import {useNavigate} from "react-router-dom"
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const MainSearch = () => {
  const [data,setData] = useState([]);
  const navigate = useNavigate();

  const getImageSearch  = async(value) => {
    const access_Key = 'h1d1n6OmU-4REm0Igu94v5yXoTp7HiAoT9U1-YuTLlY';
    const response = await axios.get(`https://api.unsplash.com/search/collections?page=1&query=${value}&client_id=${access_Key}`)  
    setData(response.data.results);
  }

  useEffect(()=> {
    getImageSearch()
  },[])
  
  return (
    <div className='imgSearchMainDiv'>
      <ImgSearchBar searchValue={getImageSearch}/>
      <ImgList data={data}/>
      <div className='btnBox searchBtnBox'>
          <button className='navigateBtn' onClick={()=>navigate('/newProfile')}><BsChevronLeft/></button>
          <button  className='navigateBtn' onClick={()=>navigate('/task')}><BsChevronRight/></button>
      </div>
    </div>
  )
}

export default MainSearch;
