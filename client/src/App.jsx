import Navbar from './components/Navbar';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useAppContext } from './context/AppContext.jsx';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home.jsx';





const App = () => {

      const isHostPath = useLocation().pathname.includes("host");
      const {showUserLogin, isHost} = useAppContext();

  return (
    <div>

      {isHostPath ? null: <Navbar />}
      {showUserLogin ? <Login/> : null}
      <Toaster/>

      <Routes>
        <Route path= '/' element={<Home/>} />
      </Routes>
    
    </div>
  )
}

export default App