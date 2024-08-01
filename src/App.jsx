import { NavBar } from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AppRouting } from "./routes/AppRouting";
import { useState } from "react";

function App() {

 

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <AppRouting />
      </BrowserRouter>
    </>
  );
}

export default App;
