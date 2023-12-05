import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Articles from './Views/Articles';
import ShoppingCar from './Views/ShoppingCar';
import Details from './Views/Details';
import ImagenArticles from './Views/ImagenArticles';
import ImagenGroups from './Views/ImagenGroups';
import Login from './Views/Login';
import Logout from './Views/Logout';
import Contac from './Views/Contac';
import GeneraPedido from './Views/GeneraPedido';

function App() {
  const params = useParams();
  return (
    <div className="App">
       <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Articles/group/:id" element={<Articles/>} />
          <Route path="/Shopping" element={<ShoppingCar/>} />
          <Route path="/Details/:id" element={<Details/>} />
          <Route path="/ImagenArticles/:id" element={<ImagenArticles/>} />
          <Route path="/ImagenGroups/:id" element={<ImagenGroups/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Logout" element={<Logout/>} />
          <Route path="/Contactenos" element={<Contac/>} />
          <Route path="/Pedidos" element={<GeneraPedido/>} />
       </Routes>

    </div>
  );
}

export default App;
