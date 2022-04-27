import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import Pricing from "./routes/Pricing";

// https://www.youtube.com/watch?v=utfRnLJTIsc&t=690s
// 18:00
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
