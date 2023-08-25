import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <nav>
            <button id="open-menu" onClick={openMenu}>
              &#9776;
            </button>
            <span id="logo">
              <a href="index.html">amazona</a>
            </span>
          </nav>
          <nav>
            <ul id="nav-bar">
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="cart.html">Cart</a>
              </li>
            </ul>
          </nav>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="#">Clothes category placeholder</a>
            </li>
            <li>
              <a href="#">Clothes category placeholder</a>
            </li>
          </ul>
        </aside>

        <main className="content">
          <Routes>
            <Route path="/" exact={true} element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </main>

        <footer className="footer">All rights reserved etc</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
