import React from "react";
import Navbar from "./components/navbar/nav";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";

const App = () => {
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    </>
  )
}

export default App;