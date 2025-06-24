import Navbar from './components/Navbar';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useAppContext } from './context/AppContext.jsx';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';





const App = () => {

      const isHostPath = useLocation().pathname.includes("host");
      const {showUserLogin, isHost} = useAppContext();

  return (
    <div>

      {isHostPath ? null: <Navbar />}
      {showUserLogin ? <Login/> : null}
      <Toaster/>

      <Routes>
        <Route path= '/login' element={<Login/>} />
      </Routes>
    
    </div>
  )
}

export default App