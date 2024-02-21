import Header from "./Common/Header/Header"
import Main from "./Common/Main/Main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Contacts from "./Pages/Contacts/Contacts"
import About from "./Pages/About/About"


const App = () => {



  return (

    <>
      <Router>
        <Header />
        <Main />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/about' element={<About/>} />

        </Routes>

      </Router>


    </>

  )
}

export default App