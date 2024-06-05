import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import About from "./components/About";
import Footer from "./components/Footer";
import CatDescription from "./components/CategoryDescription";
import Error from "./components/Error";
// nested page
import NoteBook from "./components/NoteBook";
import Monitor from "./components/Monitor";
import MobilePhone from "./components/MobilePhone";
// const navHeader = [{ link: "/" }, { link: "/about" }, { link: "/category" }];
// const navCategory = [
//   { link: "/category/notebook" },
//   { link: "/category/monitor" },
//   { link: "/category/cellphone" },
// ];

function App() {
  return (
    <>
      <div className="app-wrapper">
        {/* <h2>sono paggina app</h2> */}
        <Router>
          <div className="app-header">
            <Header />
          </div>
          <div className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/category" element={<Category />} />
              <Route
                path="/category/description"
                element={<CatDescription />}
              />
              <Route path="*" element={<Error />} />
              <Route path="/category/notebook" element={<NoteBook />} />
              <Route path="/category/monitor" element={<Monitor />} />
              <Route path="/category/cellphone" element={<MobilePhone />} />
            </Routes>
          </div>
        </Router>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
