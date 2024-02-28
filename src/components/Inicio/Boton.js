import "./style.css";

export const Boton = (props) => {
  return (
    <button style = {{backgroundColor: '#00000000', borderColor: '#00000000'}}>
      <div onClick={() => props.redirigir(props.alt)} className="boton">
        <div className="borde">
          <img className="imgCat" src={props.img} alt={props.alt} />
        </div>
        <div className="label">{props.alt}</div>
      </div>
    </button>
  );
};
