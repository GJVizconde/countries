import style from "./MiniCardCountry.module.css";

const MiniCardCountry = ({ id, name, flags, onDelete }) => {
  const handleClick = (event) => {
    onDelete(id);

    console.log(`Hicieron click en el id ${id}`);
  };
  return (
    <div className={style.card}>
      <button className={style.deleteButton} onClick={() => handleClick(id)}>
        x
      </button>
      <img src={flags} alt={name} />
      <p>{id}</p>
    </div>
  );
};

export default MiniCardCountry;
