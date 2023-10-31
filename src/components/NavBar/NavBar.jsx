import App from "../../App";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
  return (
    <nav>
      <h3>T-Shirts</h3>
      <div>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Productos</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
export default Navbar;
