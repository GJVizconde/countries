import { useDispatch, useSelector } from "react-redux";
import { orderByActivity } from "../../redux/actions";

const FilterByActivity = ({
  setOpActivity,
  opActivity,
  setCurrentPage,
  setOpContinent,
}) => {
  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.allActivities);

  // const activityArray = allActivities.map((activity) => activity.name); //! Const para el cosole de abajo

  // console.log(activityArray); //! CONSOLE Array de actividades para las opciones

  const handleActivityChange = (event) => {
    const activitySubmitted = event.target.value;
    console.log(activitySubmitted); //!CONSOLE sendActivity
    dispatch(orderByActivity(activitySubmitted));

    setOpActivity(activitySubmitted); //!Modificacion del valor a traves de State Local para hacer clear
    setCurrentPage(1);
    setOpContinent("Continents");
  };

  return (
    <div>
      <select
        id="mySelect"
        onChange={handleActivityChange}
        name="ActivityMenu"
        value={opActivity}
      >
        <option value="Activity">Activity</option>
        {allActivities.map((activity) => {
          return (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterByActivity;
