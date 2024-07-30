export const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <h1>LionShop</h1>
      </a>
      <ul className="menu">
        <li className="menu-link">
          <a href="#">Inicio</a>
        </li>
        <li className="menu-link">
          <a href="#">Nosotros</a>
        </li>
        <li className="menu-link">
          <a href="#">Productos</a>
        </li>
        <li className="menu-link">
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
