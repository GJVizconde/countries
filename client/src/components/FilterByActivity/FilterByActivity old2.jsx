import axios from "axios";
import { useEffect, useState } from "react";

const FilterByActivity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios(`/activities/`).then(({ data }) => {
      if (data && data.length > 0 && data[0].name) {
        // console.log(data); //! Revisando como llega data y props
        const arrayActivities = data?.map((dat) => dat.name);
        setActivities(arrayActivities);
        // console.log(arrayActivities); //! CONSOLE Chequeo Array
      }
    });
  }, []);
  return (
    <div>
      <label htmlFor="mySelect">Select an option:</label>
      <select id="mySelect" defaultValue="optionDefault">
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
      </select>
    </div>
  );
};

export default FilterByActivity;
