import './App.css'
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import ProfileMainApp from './pages/ProfileApp/ProfileMainApp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newProfile' element={<ProfileMainApp/>}/> 
      </Routes>
    </>
  )
}

export default App
