// ================================================================
// PROJECT SETUP INSTRUCTIONS
// ================================================================
//
// Follow these steps to set up and run your React project:
//
// 1) Open your terminal and navigate into the project folder.
//    Example:
//      cd 5-5-react-route-form
//
// 2) Install all required dependencies.
//    Command:
//      npm i
//      (or)
//      npm install
//
// 3) Install React Router to handle routing between pages.
//    Command:
//      npm i react-router-dom
//
// 4) Start your local development server.
//    Command:
//      npm run dev
//
// 5) If your system blocks npm commands due to execution policy,
//    run the following command in PowerShell to allow temporary execution:
//
//      Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//
//    After running that, re-run the npm commands again.
//
// Note: To complete the TODO 2, first implement the TODO 1.
//
// ===========================
// TODO #1: Use App.jsx file. Apply React Router
// ===========================
//
// Goal: Add routing for three pages: Home, About, Registration
//
// 1) Import router primitives from react-router-dom
//    HINT: import { Routes, Route, NavLink } from "react-router-dom";
//
// 2) Import your three page components
//    HINT: import Home from "./pages/Home";
//          import About from "./pages/About";
//          import Registration from "./pages/Registration";
//
// 3) Add a simple navbar with NavLink items for "/", "/about", "/registration" inside the <div className="links">.
//    HINT: <NavLink to="/" end className="navlink">PAGE_NAME</NavLink>
//
// 4) Define <Routes> with three <Route> entries inside the <main className="container">:
//      "/"            -> <Home />
//      "/about"       -> <About />
//      "/registration"-> <Registration />
//
// 5) Add a catch-all 404 route using path="*" and element={<h2>404 — Not Found</h2>} inside the <Routes>.
//
// NOTE:
// - Don’t change any CSS.

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Registration from "./pages/Registration";
export default function App() {
  return (
  
    <div className="app">
      <nav className="navbar">
        <div className="brand">🧑‍💻 Student Portal</div>
        <div className="links">
          <NavLink to="/" end className="navlink">
            Home
          </NavLink>

          <NavLink to="/about" className="navlink">
            About
          </NavLink>

          <NavLink to='/registration' className="navlink">
            Registration 
          </NavLink>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>

      <footer className="footer">
        <span>©️ {new Date().getFullYear()} React Student Portal</span>
      </footer>
    </div>
    
  );
}