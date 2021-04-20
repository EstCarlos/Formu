import React from "react";
import "../css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



function Nav() {
  return (
    <div>
      <nav>
        <div className="logo">
          <span>INCI</span>
          <span>FIRE</span>
        </div>
        <label for="btn" className="icon">
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </label>
        <input type="checkbox" id="btn" />
        <ul>
          <li>
           <Link to="/">INICIO</Link> 
          </li>
          <li>
            <label for="btn-1" className="show">
              Levantamientos +
            </label>
            <a href="#">Levantamientos</a>
            <input type="checkbox" id="btn-1" />
            <ul>
              <li>
                <Link to="/formulario-potter"><a>Potter</a></Link>
              </li>
              <li>
                <Link to="/formulario-novec"><a>Novec</a></Link>
              </li>
              <li>
              <Link to="/formulario-firelite"><a>firelite</a></Link>
              </li>
              <li>
              <Link to="/formulario-notifier"><a>Notifier</a></Link>
              </li>
            </ul>
          </li>
          <li>
            <label for="btn-2" className="show">
              Inspecciones +
            </label>
            <a href="#">Inspecciones</a>
            <input type="checkbox" id="btn-2" />
            <ul>
              <li>
                <a href="#">Bombas</a>
              </li>
              <li>
                <a href="#">Rociador/Riser</a>
              </li>
              <li>
                <label for="btn-3" className="show">
                  More +
                </label>
                <a href="#">
                  More
                  <span className="fa fa-plus"></span>
                </a>
                <input type="checkbox" id="btn-3" />
                <ul>
                  <li>
                    <a href="#">Submenu-1</a>
                  </li>
                  <li>
                    <a href="#">Submenu-2</a>
                  </li>
                  <li>
                    <a href="#">Submenu-3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portafolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
