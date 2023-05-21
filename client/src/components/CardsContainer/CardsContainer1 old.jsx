import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CardsContainer = () => {
  let showCountries = useSelector((state) => state.showCountries);

  // console.log(showCountries); //!CONSOLE ver que paises muestra

  useEffect(() => {
    // Aquí puedes realizar cualquier lógica adicional que necesites al actualizar showCountries
    console.log(showCountries); //!CONSOLE Debe Mostrar cuando actualiza el estado showCountries
  }, [showCountries]);

  return (
    <div className={style.container}>
      {showCountries.map((country) => {
        return (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            flags={country.flags}
            continent={country.continent}
            population={country.population.toLocaleString()}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
