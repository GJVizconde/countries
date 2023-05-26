import style from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className={style.Container}>
      <h1 className={style.Titulo}>Bienvenidos</h1>
      <p className={style.infotext}>
        Cuantas veces has querido viajar a un sitio y no sabes que actividades
        hacer? Travel & Fun, es la app web donde tendras todos los datos de los
        paises que quieres conocer Vive aventuras y grandes experiencia ahora!
      </p>
      <Link to="/home">
        <button className={style.button}>Ir al home</button>
      </Link>
    </div>
  );
};

export default Landing;
