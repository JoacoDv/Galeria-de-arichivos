import './App.css';
import Login from "./components/Login"
import Registro from "./components/Registro"
import Galeria from "./components/Galeria"
import RecuperarContraseña from "./components/RecuperarContraseña"
import MailEnviado from './components/MailEnviado';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/contraseña" element={<RecuperarContraseña />}></Route>
        <Route path="/contraseña/recuperacion" element={<MailEnviado />}></Route>
        <Route path='/home' element={<Galeria />}></Route>
      </Routes>
    </div>
  );
}

export default App;
