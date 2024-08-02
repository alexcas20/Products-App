import { Link } from "react-router-dom";

export const Modal = ({ showModal, closeModal }) => {
  console.log(showModal);

  const openModal = () => {
    closeModal();
  };

  return (
    <>
      {/* // navbar mobile */}

      {showModal && (
        <nav className="nav-mobile">
          <ul className="menu">
            <li className="menu-link">
              <Link to="/" onClick={openModal}>Inicio</Link>
            </li>
            <li className="menu-link">
              <Link to="/productos" onClick={openModal}>Productos</Link>
            </li>
            <li className="menu-link">
              <Link to="/productos/medias" onClick={openModal}>Medias</Link>
            </li>
            <li className="menu-link">
              <Link to="/productos/pantalones" onClick={openModal}>Pantalones</Link>
            </li>
            <li className="menu-link">
              <Link to="/productos/playeras" onClick={openModal}>Playeras</Link>
            </li>
            <li className="menu-link">
              <Link to="/productos/sudaderas" onClick={openModal}>Sudaderas</Link>
            </li>
            <li className="menu-link">
              <Link to="/contacto" onClick={openModal}>Contacto</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
