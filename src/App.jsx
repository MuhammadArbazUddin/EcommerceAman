import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ContactUs,
  Home,
  Login,
  Register,
  Vendors,
  VendorsDetailPage,
  ForgotPassword,
} from "./pages/page";
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
        <Route path="/vendors-details" element={<VendorsDetailPage />} />{" "}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
