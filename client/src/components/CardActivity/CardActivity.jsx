import style from "./CardActivity.module.css";

const CardActivity = ({ id, name, images, season, difficulty, duration }) => {
  console.log(id, name, images);
  return (
    <div className={style.card}>
      <img className={style.image} src={images} alt={name} />
      <p key={id}>{name}</p>
      <p>Duration:{duration}</p>
      <p>Season:{season}</p>
      <p>Diffculty:{difficulty}</p>
    </div>
  );
};

export default CardActivity;
