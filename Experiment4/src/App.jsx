import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
    <h1>Exp 4</h1>
      <BrowserRouter>
          <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="setting" element={<Setting/>}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
