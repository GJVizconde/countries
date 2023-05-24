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
  };
  return (
    <div>
      <button onClick={handleClick}>Clear Filters</button>
    </div>
  );
};

export default ClearButton;
