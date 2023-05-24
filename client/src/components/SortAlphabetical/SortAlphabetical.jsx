import { useDispatch } from "react-redux";
import { sortAlph } from "../../redux/actions";

const SortAlphabetical = ({
  setOpAlphabetical,
  opAlphabetilcal,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();

  const handleOrderChange = (event) => {
    const value = event.target.value;
    console.log(value); //!CONSOLE Verificando valor Menu Continents
    dispatch(sortAlph(value)); // dispatch del value

    setOpAlphabetical(value);

    setCurrentPage(1);
  };

  return (
    <div>
      <select
        id="selectAlphabetical"
        onChange={handleOrderChange}
        name="selectAlphabeticalOrder"
        value={opAlphabetilcal}
      >
        <option value="Order">A-Z</option>
        <option value="Reverse">Z-A</option>
      </select>
    </div>
  );
};

export default SortAlphabetical;
