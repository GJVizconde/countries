import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, flags, continent, population }) => {
  return (
    <div className={style.card} key={id}>
      <Link to={`/detail/${id}`}>
        <img src={flags} alt={name} />
        <p>{name}</p>
        <p>{continent}</p>
        <p>{population}</p>
      </Link>
    </div>
  );
};

export default Card;
