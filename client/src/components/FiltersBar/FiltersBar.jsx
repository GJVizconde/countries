import style from "./FiltersBar.module.css";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import FilterByActivity from "../FilterByActivity/FilterByActivity";
import SortAlphabetical from "../SortAlphabetical/SortAlphabetical";
import SortPopulation from "../SortPopulation/SortPopulation";
import ClearButton from "../ClearButton/ClearButton";
import { useState } from "react";

const FiltersBar = ({ setCurrentPage }) => {
  const [opContinent, setOpContinent] = useState("");

  const [opActivity, setOpActivity] = useState("");

  const [opAlphabetilcal, setOpAlphabetical] = useState("");

  const [opPopulation, setOpPopulation] = useState("");

  return (
    <div className={style.barContainer}>
      <div>
        <FilterByContinent
          setOpContinent={setOpContinent}
          opContinent={opContinent}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div>
        <FilterByActivity
          setOpActivity={setOpActivity}
          opActivity={opActivity}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div>
        <SortAlphabetical
          setOpAlphabetical={setOpAlphabetical}
          opAlphabetilcal={opAlphabetilcal}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div>
        <SortPopulation
          setOpPopulation={setOpPopulation}
          opPopulation={opPopulation}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div>
        <ClearButton
          setOpContinent={setOpContinent}
          setOpActivity={setOpActivity}
          setOpAlphabetical={setOpAlphabetical}
          setOpPopulation={setOpPopulation}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default FiltersBar;
