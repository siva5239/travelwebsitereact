// import logo from './logo.svg';
// import './App.css';
import React from "react";
import BackGround from "./components/BackGround";
import Carouselimg from "./components/Carouselimg";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div className="App">
       <Navbar />
       <BackGround />
       <Destinations />
       <Search />
       <Selects />
       <Carouselimg />
       <Footer />
    </div>
  );
}

export default App;
