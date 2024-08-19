import { Route, Routes } from "react-router-dom"
import Header from "./Pages/Static/Header"
import Static from "./Pages/Static/static"
import Projects from "./Pages/Static/Projects"
import Skills from "./Pages/Static/Skills"
import Hobbies from "./Pages/Static/Hobbies"
import Contact from "./Pages/Static/Contact"
import Academics from "./Pages/Static/Academics"

function App() {
 
 return (
    <div className="bg-gray-900 m-w-full min-h-screen">
      <Header/>
      <div className="flex">
      <Static/>
      <Routes>
      <Route path="/" element={<Academics/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/hobbie" element={<Hobbies/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/academics" element={<Academics/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
