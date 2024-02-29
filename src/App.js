import React from "react";
// import './App.css';
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Footer from "./Component/Footer";
import Destinations from "./Component/Destinations";

function App() {
  return (
   <div>
     <Navbar/>
       <Hero/>
       <Footer/>
       <Destinations/>
   </div>
  );
}

export default App;
