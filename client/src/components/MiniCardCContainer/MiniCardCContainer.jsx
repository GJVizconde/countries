import style from "./MiniCardCContainer.module.css";
import MiniCardCountry from "../MiniCardCountry/MiniCardCountry";

const MiniCardCContainer = ({ countrySelected, onDelete }) => {
  return (
    <div className={style.container}>
      {countrySelected.map((country) => {
        return (
          <MiniCardCountry
            key={country.id}
            id={country.id}
            name={country.name}
            flags={country.flags}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default MiniCardCContainer;
