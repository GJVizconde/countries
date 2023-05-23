import { getActivities } from "../../redux/actions";
import { validate } from "./validation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import CountriesForm from "../../components/CountriesForm/CountriesForm";

const Form = () => {
  //!HOOKS
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);

  useEffect(() => {
    dispatch(getActivities()); // Trayendo activities para chequear estado Global si no se hace dispatch se pierde la data sino se llega a Home
  }, [dispatch]);

  useEffect(() => {
    console.log(allActivities); //!CONSOLE Debe Mostrar cuando actualiza el estado showCountries
  }, [allActivities]);

  const [idArray, setIdArray] = useState([]); // Se pasara por prompts, estado para capturar los id de los countries

  const [countrySelected, setCountrySelected] = useState([]);

  const [optionCountry, setOptionCountry] = useState(""); // Estado para limpiar  countriesSelect

  const [input, setInput] = useState({
    name: "",
    difficulty: "0",
    duration: "",
    season: "",
    countries: [], // Se agregó en ambos countries
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "0",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    console.log(idArray); //! CONSOLE Check el array de id de Countries
  }, [idArray]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [property]: value,
    });

    setErrors(
      validate({
        ...input,
        [property]: value,
      })
    );
  };

  const handleClear = (event) => {
    // console.log("Estoy haciendo Clear"); //! CONSOLE Probando boton Clear
    setInput({
      ...input,
      name: "",
      difficulty: "0",
      duration: "",
      season: "",
      countries: [],
    });

    setIdArray([]);
    setCountrySelected([]);
    setOptionCountry("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      input.name &&
      input.difficulty &&
      input.duration &&
      input.season &&
      !errors.name &&
      !errors.difficulty &&
      !errors.duration &&
      !errors.season
    ) {
      alert("The activity was created successfully."); //! Alert de Prueba antes de poner el axios

      axios
        .post("http://localhost:3001/activities/", input)
        // .then((res) => alert(res.data)) //!puse el "data", modificacion el "data" esta de prueba ,igual me sigue mostrando Object
        .catch((err) => alert(err));

      // console.log(input);

      handleClear();
    } else {
      alert("An error occurred, please check your data and try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Estoy en Form</h2>
        <div>
          <label htmlFor="name">Activity: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty: </label>
          <input
            type="range"
            name="difficulty"
            min="0"
            max="5"
            placeholder="1-5"
            value={input.difficulty}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration(hr): </label>
          <input
            type="number"
            name="duration"
            min="0"
            max="12"
            step="0.5"
            placeholder="0.5-12"
            value={input.duration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="season">Season: </label>
          <select name="season" value={input.season} onChange={handleChange}>
            <option value="Season">Season</option>
            <option value="Autumn/Fall">Autumn/Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <div>
          <CountriesForm
            idArray={idArray}
            setIdArray={setIdArray}
            setInput={setInput}
            setCountrySelected={setCountrySelected}
            countrySelected={countrySelected}
            setOptionCountry={setOptionCountry}
            optionCountry={optionCountry}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={
              !input.name ||
              !input.difficulty ||
              !input.duration ||
              !input.season ||
              input.season === "Season" ||
              errors.name ||
              errors.difficulty ||
              errors.duration ||
              errors.season
            }
          >
            Create Activity
          </button>
          <button type="button" onClick={() => handleClear()}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
