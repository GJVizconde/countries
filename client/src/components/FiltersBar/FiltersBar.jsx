import style from "./FiltersBar.module.css";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import FilterByActivity from "../FilterByActivity/FilterByActivity";

const FiltersBar = () => {
  return (
    <div className={style.barContainer}>
      <div>
        <FilterByContinent />
      </div>
      <div>
        <FilterByActivity />
      </div>
    </div>
  );
};

export default FiltersBar;
