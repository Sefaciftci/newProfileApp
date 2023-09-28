import './App.css'
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import ProfileMainApp from './pages/ProfileApp/ProfileMainApp';
import MainSearch from './pages/ImgSearchApp/MainSearch';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newProfile' element={<ProfileMainApp/>}/> 
        <Route path='/imgSearch' element={<MainSearch/>}/>
      </Routes>
    </>
  )
}

export default App
