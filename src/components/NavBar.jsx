import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal/Modal";

import closeIcon from "/icons/close.png";
import linesIcon from "/icons/lines.png";
import { CartWidget } from "./CartWidget/CartWidget";

export const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [iconButton, setIconButton] = useState(linesIcon);

  const closeModal = () => {
    setOpenModal(!openModal);
    if (iconButton === linesIcon) {
      setIconButton(closeIcon);
    } else setIconButton(linesIcon);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h1>LionShop</h1>
        </Link>

        <button onClick={closeModal} className="nav-close">
          <img style={{ width: "35px" }} src={iconButton} />
        </button>
        <ul className="menu">
          <li className="menu-link">
            <Link to="/">Inicio</Link>
          </li>
          <li className="menu-link">
            <Link to="/productos">Productos</Link>
          </li>
          <li className="menu-link">
            <Link to="/productos/medias">Medias</Link>
          </li>
          <li className="menu-link">
            <Link to="/productos/pantalones">Pantalones</Link>
          </li>
          <li className="menu-link">
            <Link to="/productos/playeras">Playeras</Link>
          </li>
          <li className="menu-link">
            <Link to="/productos/sudaderas">Sudaderas</Link>
          </li>
          <li className="menu-link">
            <Link to="/contacto">Contacto</Link>
          </li>
          <li className="menu-link"><CartWidget/></li>
        </ul>
      </nav>

      <Modal showModal={openModal} closeModal={closeModal}  />
    </>
  );
};
