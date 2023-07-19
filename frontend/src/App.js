import logo from "./logo.svg";
import "./App.css";
import data from "./data";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
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
        <ul className="products">
          {data.products.map(({ id, image, name, brand, price, rating, numReviews }) => (
            <li className="product" id={id}>
              <img src={image} alt="Product Image" />
              <p className="product-name">
                <a href="#">{name}</a>
              </p>
              <p className="product-brand">{brand}</p>
              <p className="product-price">${price}</p>
              <p className="product-rating">
                {rating} Stars ({numReviews} reviews)
              </p>
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">All rights reserved etc</footer>
    </div>
  );
}

export default App;
