import { useDispatch } from "react-redux";
import { sortPopulation } from "../../redux/actions";

const SortPopulation = ({ setOpPopulation, opPopulation }) => {
  const dispatch = useDispatch();

  const handleOrderChange = (event) => {
    const value = event.target.value;
    console.log(value); //!CONSOLE Verificando valor Menu Population
    dispatch(sortPopulation(value)); // dispatch del value

    setOpPopulation(value);
  };

  return (
    <div>
      <select
        id="selectPopulation"
        defaultValue="Population"
        onChange={handleOrderChange}
        name="selectPopulationOrder"
        value={opPopulation}
      >
        <option value="Population">Population</option>
        <option value="Ascendent">Ascendent</option>
        <option value="Descendent">Descendent</option>
      </select>
    </div>
  );
};

export default SortPopulation;
