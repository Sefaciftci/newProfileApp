import React,{useState} from 'react'
import axios from 'axios'



//axios ile apiden verimizi cekeriz main appte state olustururuz oradan propsa buradan verileri alıp imgComponentine yollarız 
//imgComponentine gelen dataları map ile dönüp her birine imgItem componentine yollaraız orada style işlemlerimiz yaparız


const ImgSearchBar = ({searchValue}) => {

    const[value,setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        searchValue(value);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder='Resim Ara'
        onChange={(e)=> setValue(e.target.value)}
        value={value}/>
      </form>
    </div>
  )
}

export default ImgSearchBar
