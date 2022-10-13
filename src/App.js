import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import AddVeiculo from "./pages/AddVeiculo";
import Dashboard from "./pages/Dashboard";
import DetalhesVeiculos from "./pages/DetalhesVeiculos";
import ListarVeiculos from "./pages/ListarVeiculos";



export default function App() {
  return (
    <div>

      <BrowserRouter>

      <Navbar/>

        <Routes>

          <Route path="/" element={<Dashboard/>} />
          <Route path="/listar" element={ <ListarVeiculos/> } />
          <Route path="/novo" element={ <AddVeiculo/> } />
          <Route path="/detalhes" element={ <DetalhesVeiculos/> } />

        </Routes>

      </BrowserRouter>


    </div>
  );
}


