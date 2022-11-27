import React from "react";
import Campaign from "./Campaign";
import Home from "./Home";
import Users from "./pages/Users"
import User from "./pages/User"
import RegisterFund from "./pages/RegisterFund";
import {BrowserRouter as   Router, Routes, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./state/store";

const App = () => {
   return(
<Provider store={store}>
   <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/features' element={<Campaign/>} />
        <Route path='/registerfund' element={<RegisterFund/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/user" element={<User/>}/>
    </Routes>
    </Router>
</Provider>
  
   )
}

export default App