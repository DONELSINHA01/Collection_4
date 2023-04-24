import { Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
function App() {
    return(
      <div className='App'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </Router>
      </div>
    );
    
}

export default App;
