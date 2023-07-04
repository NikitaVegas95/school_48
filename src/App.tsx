import { Routes, Route } from "react-router-dom";
import React, { FC } from 'react';
import Main from "./page/Main";
import Reg from "./page/Reg";

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/registration" element={<Reg/>}/>
  </Routes>
)

export default App
