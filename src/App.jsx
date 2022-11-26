import React from "react";
import Campaign from "./Campaign";
import Home from "./Home";
import {BrowserRouter as   Router, Routes, Route} from 'react-router-dom';

const App = () => {
   return(

   <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/campaign' element={<Campaign/>} />
    </Routes>
    </Router>
  
   )
}

export default App