import React from "react";
// import './App.css';
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Destinations from "./Component/Destinations";
import Footer from "./Component/Footer";
import Search from "./Component/Search";

function App() {
  return (
   <div>
     <Navbar/>
       <Hero/>
       <Destinations/>
       <Search/>
       <Footer/>
   </div>
  );
}

export default App;
