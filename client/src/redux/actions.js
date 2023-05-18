import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/countries/");
    const getAllCountries = apiData.data;

    dispatch({
      type: GET_COUNTRIES,
      payload: getAllCountries,
    });
  };
};

// export const getByName = (name) => {
//   return {
//     type: GET_BY_NAME,
//     payload: name,
//   };
// };

export const getByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/countries/?name=${name}`
    );
    const getArrayByname = apiData.data;

    dispatch({
      type: GET_BY_NAME,
      payload: getArrayByname,
    });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/activities/");
    const getAllActivities = apiData.data;

    dispatch({
      type: GET_ACTIVITIES,
      payload: getAllActivities,
    });
  };
};
