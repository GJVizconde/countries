import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { getByName } from "../../redux/actions";

const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    // dispatch(getByName(event.target.value));
    console.log(event.target.value); //! CONSOLE lo que se envia por la action getByName, prueba
    dispatch(getByName(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <input
        type="search"
        className={style.Input}
        name="searchInput"
        onChange={handleOnChange}
        placeholder="Search Country"
      />
      {/* <button>Search</button> */}
    </div>
  );
};

export default SearchBar;
