import { useDispatch, useSelector } from "react-redux";
import { orderByActivity } from "../../redux/actions";

const FilterByActivity = () => {
  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.allActivities);

  // const activityArray = allActivities.map((activity) => activity.name); //! Const para el cosole de abajo

  // console.log(activityArray); //! CONSOLE Array de actividades para las opciones

  const handleActivityChange = (event) => {
    const activitySubmitted = event.target.value;
    console.log(activitySubmitted); //!CONSOLE sendActivity
    dispatch(orderByActivity(activitySubmitted));
  };

  return (
    <div>
      <select
        id="mySelect"
        defaultValue="Activity"
        onChange={handleActivityChange}
        name="ActivityMenu"
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
