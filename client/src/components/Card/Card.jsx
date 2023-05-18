import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, flags, continent }) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${id}`}>
        <img src={flags} alt={name} />
        <p>{name}</p>
        <p>{continent}</p>
      </Link>
    </div>
  );
};

export default Card;
