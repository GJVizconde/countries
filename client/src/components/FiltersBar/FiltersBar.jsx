import style from "./FiltersBar.module.css";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import FilterByActivity from "../FilterByActivity/FilterByActivity";
import SortAlphabetical from "../SortAlphabetical/SortAlphabetical";

const FiltersBar = () => {
  return (
    <div className={style.barContainer}>
      <div>
        <FilterByContinent />
      </div>
      <div>
        <FilterByActivity />
      </div>
      <div>
        <SortAlphabetical />
      </div>
    </div>
  );
};

export default FiltersBar;
