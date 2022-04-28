import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";
import Contact from "./routes/Contact";

// https://www.youtube.com/watch?v=utfRnLJTIsc&t=690s
// 1:10:50
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
