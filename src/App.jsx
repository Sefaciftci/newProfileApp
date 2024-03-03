import './App.css'
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import ProfileMainApp from './pages/ProfileApp/ProfileMainApp';
import MainSearch from './pages/ImgSearchApp/MainSearch';
import MainTask from './pages/TaskApp/MainTask';
import WeatherMain from './pages/WheatherApp/WeatherMain';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newProfile' element={<ProfileMainApp/>}/> 
        <Route path='/imgSearch' element={<MainSearch/>}/>
        <Route path='/task' element={<MainTask/>}/>
        <Route path='/weather' element={<WeatherMain/>}/>
      </Routes>
    </>
  )
}

export default App
