import React, { useContext, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Ticket from "./components/Ticket";


function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} /> 
      <Route path="/ticket/:name" element={<Ticket />} /> 

    </Routes>
  );
  
}

export default App;
