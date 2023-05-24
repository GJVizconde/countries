import { useDispatch } from "react-redux";
import {
  orderByActivity,
  orderByContinent,
  sortAlph,
  sortPopulation,
} from "../../redux/actions";

const ClearButton = ({
  setOpContinent,
  setOpActivity,
  setOpAlphabetical,
  setOpPopulation,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setOpContinent("Continents");
    dispatch(orderByContinent("Continents"));

    setOpActivity("Activity");
    dispatch(orderByActivity("Activity"));

    setOpAlphabetical("Order");
    dispatch(sortAlph("Order"));

    setOpPopulation("Population");
    dispatch(sortPopulation("Population"));

    setCurrentPage(1);
  };
  return (
    <div>
      <button onClick={handleClick}>Clear Filters</button>
    </div>
  );
};

export default ClearButton;
