import React,{useState} from 'react'
import '../imgSearchApp.css';

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
      <form onSubmit={handleSubmit} className='imgSearchForm'>
        <input
        placeholder='Search Photos'
        onChange={(e)=> setValue(e.target.value)}
        value={value}/>
      </form>
    </div>
  )
}

export default ImgSearchBar
