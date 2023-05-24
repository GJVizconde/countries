import style from "./CardsContainer.module.css";
import Card from "../Card/Card";

const CardsContainer = ({ showCountries }) => {
  // console.log(showCountries); //! CONSOLE Check El estado global showCountries esta pasando correctamente por Prompts

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
            // population={country.population.toLocaleString()}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
