import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const showCountries = useSelector((state) => state.showCountries);

  // console.log(showCountries); //!CONSOLE

  return (
    <div className={style.container}>
      {showCountries?.map((country) => {
        return (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            flags={country.flags}
            continent={country.continent}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
