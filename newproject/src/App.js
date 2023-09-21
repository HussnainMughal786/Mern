import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Home from "./components/Home";
import Ecommerce from "./components/Ecommerce";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import Login from "./components/Login";
import Updateinfo from "./components/Upadatinfo";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/Ecommerce" element={<Ecommerce/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Users" element={<Users/>} />
      <Route path="/Contact-us" element={<Contactus/>} />
      <Route path="/About-us" element={<Aboutus/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Update/:id" element={<Updateinfo/>} />
    </Routes>
    </>
  );
}

export default App;
