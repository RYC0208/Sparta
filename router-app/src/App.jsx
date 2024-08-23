import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gt from "./components/Gt";
import Detail from './components/Detail';
import Test from "./components/Test";
const App = () => {
  return (
    // <main>
    //   <h1>갓탠다드반 🔥 5차 수업 🔥</h1>
    // </main>
    <BrowserRouter>
      <Routes>
        {/* 어디로 오면 아디로 보낼지 */}
        {/* 1. 어디로 오면 : path */}
        {/* 2. 어디로 보낼지 : element */}
        <Route path="/" element={<Home />} />
        <Route path="/gt" element={<Gt />} />
        <Route path="/detail/:userName" element={<Detail />} />
        <Route path="/test/:first/:second" element={<Test />} />
      </Routes> 
    </BrowserRouter>
  );
};

export default App;
