import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, flags, continent }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className={style.card} key={id}>
        <img className={style.image} src={flags} alt={name} />

        <div className={style.info}>
          <div>
            <span className={style.name}>{name}</span>
          </div>
          <p className={style.continentLabel}>Continent:</p>
          <div>
            <span className={style.continent}>{continent}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
