import style from "./CardActivity.module.css";

const CardActivity = ({ id, name }) => {
  console.log(id, name);
  return (
    <div className={style.card}>
      <p key={id}>{name}</p>
    </div>
  );
};

export default CardActivity;
