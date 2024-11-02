import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Vendors } from "./pages/page";
import { Footer, Header, HeaderTop, Navbar } from "./components/components";

const App = () => {
  return (
    <Router>
      <HeaderTop />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
