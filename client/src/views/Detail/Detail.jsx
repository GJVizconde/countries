import axios from "axios";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardActivity from "../../components/CardActivity/CardActivity";

const Detail = () => {
  const { id } = useParams();
  // console.log(id); //! CONSOLE id que se recibe por Params

  const [country, setCountry] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      // console.log(data); //! CONSOLE verificando data, getCountryById
      if (data[0].name) {
        setCountry(data[0]);
      } else {
        console.log("There is no country with that ID"); //!CONSOLE error
      }
    });
    // return setCountry({});
  }, [id]);

  // console.log(typeof country?.population); //! CONSOLE Tipo de Dato la poblacion

  // console.log(country.activities); //! CONSOLE Activities que tiene el CountryByID

  return (
    <div>
      <h2>{country.name}</h2>
      <div className={style.detail}>
        <div>
          <img src={country.flags} alt={country.name} />
        </div>
        <div className={style.infoContainer} key={country.id}>
          <p>Id: {country.id}</p>
          <p>Name: {country.name}</p>
          <p>Continent: {country.continent}</p>
          {country?.capital !== "Undefined capital city" && (
            <p>Capital: {country.capital}</p>
          )}
          {country?.subregion !== "Undefined subregion" && (
            <p>Subregion: {country.subregion}</p>
          )}
          {country?.area && <p>Area: {country.area?.toLocaleString()} km²</p>}
          <p>Population: {country.population?.toLocaleString()} millions</p>
        </div>
      </div>
      {country?.activities?.length !== 0 && (
        <div>
          <p className={style.activityContainer}>Activities:</p>
          <div className={style.activity}>
            {country?.activities?.map((activity) => {
              return (
                <CardActivity
                  key={activity.id}
                  id={activity.id}
                  name={activity.name}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
