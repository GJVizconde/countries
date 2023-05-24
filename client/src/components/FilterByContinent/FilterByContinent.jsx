import { useDispatch } from "react-redux";
import { orderByContinent } from "../../redux/actions";

const FilterByContinent = ({ setOpContinent, opContinent, setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log(value); //!CONSOLE Verificando valor Menu Continents
    dispatch(orderByContinent(value));
    setOpContinent(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <select
        id="mySelect"
        onChange={handleChange}
        name="continentMenu"
        value={opContinent}
      >
        <option value="Continents">Continents</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
    </div>
  );
};

export default FilterByContinent;
