import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../images/logo.png";
import BotonLogin from "../BotonLogin/Login";
import BotonLogout from "../BotonLogout/Logout";

function Header() {
  return (
    <Fragment>
      <div className="header">
        <div className="sec1">
          <div>
            <Link to="/ui/inicio">
              <img
                src={logo}
                className="image"
                alt="logo"
                width="50"
                height="50"
              />
            </Link>
          </div>
          <div className="link">
            <Link to="/ui/inicio" className="text-link">
              Inicio
            </Link>
          </div>
          {localStorage.getItem("token") !== null &&
            localStorage.getItem("token") !== "" &&
            localStorage.getItem("token") !== undefined && (
              <>
                <div className="link">
                  <Link to="/ui/alimentos" className="text-link">
                    Alimentos
                  </Link>
                </div>
                <div className="link">
                  <Link to="/ui/añadir" className="text-link">
                    Añadir
                  </Link>
                </div>
                <div className="link">
                  <Link to="/ui/administrador" className="text-link">
                    Administrador
                  </Link>
                </div>
              </>
            )}
        </div>
        <div className="sec2">
          <div className="botonLoginYLogout">
            {localStorage.getItem("token") ? <BotonLogout /> : <BotonLogin />}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
