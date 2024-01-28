import Add from "./componants/Add"
import Header from "./componants/Header"
import Watched from "./componants/Watched"
import Watchlist from "./componants/Watchlist"
import "./index.css"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"



function App() {
 

  return (
    <>
      <div>
        <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add/>} />
          
        </Routes>
        </Router>
       
      </div>
     
    </>
  )
}

export default App
