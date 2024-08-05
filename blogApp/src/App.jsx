import React from "react";
import Blog from "./pages/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import RegistrationForm from "./pages/RegistrationForm";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypost" element={<Blog />} />
        <Route path="/Register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </AuthState>
  );
};

export default App;
