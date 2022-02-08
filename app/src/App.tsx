import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import Services from "./components/services/Services";
import Layout from "./components/Layout";
import Paths from "./components/common/consts/Paths";
import Gallery from "./components/gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./custom.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
     
      <Routes>
        <Route path={Paths.services} element={<Services />} />
        <Route path={Paths.gallery} element={<Gallery />} />
        <Route path={Paths.contact} element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
