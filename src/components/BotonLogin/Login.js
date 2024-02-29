import "./style.css";
import { Link } from "react-router-dom";
import login50 from "../../images/login50.png";

const BotonLogin = () => {
  return (
    <Link to="/ui/login">
      <div className="botonlogin">
        <img className="loginImage" src={login50} alt="login" />
        <div className="labellogin">Iniciar Sesión</div>
      </div>
    </Link>
  );
};

export default BotonLogin;
