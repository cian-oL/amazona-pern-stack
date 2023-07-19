import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="grid-container">
      <header>
        <nav>
          <button id="open-menu" onclick="openMenu()">
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
        <button className="sidebar-close-button" onclick="closeMenu()">
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
        <ul className="products">
          <li className="product">
            <img src="/images/holder-image.jpg" alt="Product Image" />
            <p className="product-name">
              <a href="#">Product Name</a>
            </p>
            <p className="product-brand">Product Brand</p>
            <p className="product-price">$00</p>
            <p className="product-rating">xx Stars (yy reviews)</p>
          </li>
          <li className="product">
            <img src="/images/holder-image.jpg" alt="Product Image" />
            <p className="product-name">
              <a href="#">Product Name</a>
            </p>
            <p className="product-brand">Product Brand</p>
            <p className="product-price">$00</p>
            <p className="product-rating">xx Stars (yy reviews)</p>
          </li>
          <li className="product">
            <img src="/images/holder-image.jpg" alt="Product Image" />
            <p className="product-name">
              <a href="#">Product Name</a>
            </p>
            <p className="product-brand">Product Brand</p>
            <p className="product-price">$00</p>
            <p className="product-rating">xx Stars (yy reviews)</p>
          </li>
          <li className="product">
            <img src="/images/holder-image.jpg" alt="Product Image" />
            <p className="product-name">
              <a href="#">Product Name</a>
            </p>
            <p className="product-brand">Product Brand</p>
            <p className="product-price">$00</p>
            <p className="product-rating">xx Stars (yy reviews)</p>
          </li>
          <li className="product">
            <img src="/images/holder-image.jpg" alt="Product Image" />
            <p className="product-name">
              <a href="#">Product Name</a>
            </p>
            <p className="product-brand">Product Brand</p>
            <p className="product-price">$00</p>
            <p className="product-rating">xx Stars (yy reviews)</p>
          </li>
        </ul>
      </main>

      <footer className="footer">All rights reserved etc</footer>
    </div>
  );
}

export default App;
