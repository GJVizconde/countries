import { useDispatch } from "react-redux";
import { sortAlph } from "../../redux/actions";

const SortAlphabetical = () => {
  const dispatch = useDispatch();

  const handleOrderChange = (event) => {
    const value = event.target.value;
    console.log(value); //!CONSOLE Verificando valor Menu Continents
    dispatch(sortAlph(value)); // dispatch del value
  };

  return (
    <div>
      <select
        id="selectAlphabetical"
        defaultValue="Order"
        onChange={handleOrderChange}
        name="selectAlphabeticalOrder"
      >
        <option value="Order">A-Z</option>
        <option value="Reverse">Z-A</option>
      </select>
    </div>
  );
};

export default SortAlphabetical;
