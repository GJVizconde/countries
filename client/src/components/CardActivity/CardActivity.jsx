import style from "./CardActivity.module.css";

const CardActivity = ({ id, name, images }) => {
  console.log(id, name, images);
  return (
    <div className={style.card}>
      <img className={style.image} src={images} alt={name} />
      <p key={id}>{name}</p>
    </div>
  );
};

export default CardActivity;
