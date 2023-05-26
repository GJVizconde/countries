import style from "./CountriesForm.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import MiniCardCContainer from "../MiniCardCContainer/MiniCardCContainer";

const CountriesForm = ({
  idArray,
  setIdArray,
  setInput,
  countrySelected,
  setCountrySelected,
  setOptionCountry,
  optionCountry,
}) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  // console.log(allCountries);

  // const [countrySelected, setCountrySelected] = useState([]); //! Se envia para Form, para limpiarlo con el boton Clear y se recibe por props
  // const [idArray, setIdArray] = useState([]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    console.log(countrySelected); //! CONSOLE Check el objeto country
  }, [countrySelected]);

  // useEffect(() => {
  //   console.log(idArray); //! CONSOLE Check el array id
  // }, [idArray]);

  const handleSelectCountry = (event) => {
    const idValue = event.target.value;
    console.log();

    const isIdAlreadySelected = countrySelected.some(
      (country) => country.id === idValue
    );

    if (!isIdAlreadySelected) {
      const findedCountry = allCountries
        .filter((country) => country.id === idValue)
        .map(({ id, name, flags }) => ({ id, name, flags }));

      setCountrySelected([...countrySelected, ...findedCountry]);

      setIdArray([...idArray, idValue]);

      setInput((prevInput) => ({
        ...prevInput,
        countries: [...prevInput.countries, idValue],
      }));

      const property = event.target.name;

      setOptionCountry(idValue);
    }
  };

  // Para mejorar esta parte del codigo y setear correctamente el clear
  // Es necesario vincular el Estado setCountrySelected con
  // el event.target.name y el event.target.value
  // Si da tiempo se hará la modificacion

  const onDelete = (id) => {
    const countriesFiltered = countrySelected.filter(
      (country) => country.id !== id
    );
    setCountrySelected(countriesFiltered);

    const idFiltered = idArray.filter((idArr) => idArr !== id);

    setIdArray(idFiltered);
    setInput((prevInput) => ({
      ...prevInput,
      countries: prevInput.countries.filter((idArr) => idArr !== id),
    }));
  };

  return (
    <div className={style.form}>
      <div>
        <label className={style.pText}>Select a Country:</label>
      </div>
      <div>
        <select
          name="countriesSelect"
          value={optionCountry}
          onChange={handleSelectCountry}
        >
          <option value="Select a Country">Select a Country</option>
          {allCountries.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
        <MiniCardCContainer
          countrySelected={countrySelected}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default CountriesForm;
