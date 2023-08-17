import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Articles from './Views/Articles';
import ShoppingCar from './Views/ShoppingCar';

function App() {
  const params = useParams();
  return (
    <div className="App">
       <Navbar/>
       <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Articles/:id" element={<Articles/>} />
          <Route path="/Shopping" element={<ShoppingCar/>} />
       </Routes>

    </div>
  );
}

export default App;
