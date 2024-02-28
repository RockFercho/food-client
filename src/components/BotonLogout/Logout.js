import "./style.css";
import { Link } from "react-router-dom";
import logout50 from "../../images/logout50.png";
import axios from "axios";
import { URL_LOGOUT } from "../../global/const";

const BotonLogout = () => {
  return (
    <Link>
      <div
        onClick={() => {
          const token = localStorage.getItem("token");
          axios.post(URL_LOGOUT, { token: token });
        }}
        className="botonlogout"
      >
        <img className="logoutImage" src={logout50} alt="logout" />
        <div className="labellogout">Cerrar Sesión</div>
      </div>
    </Link>
  );
};

export default BotonLogout;
