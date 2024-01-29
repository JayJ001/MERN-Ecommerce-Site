import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Shop from "./pages/Shop"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Signup from "./pages/Signup"

function App() {
  const {user} = useAuthContext()


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={user ? <Shop /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/shop" />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/shop" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
