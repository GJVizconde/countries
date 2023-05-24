import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const ORDER_BY_CONTINENT = "ORDER_BY_CONTINENT";
export const ORDER_BY_ACTIVITY = "ORDER_BY_ACTIVITY";
export const SORT_ALPHABETICAL = "SORT_ALPHABETICAL";
export const SORT_POPULATION = "SORT_POPULATION";

export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get("/countries/");
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
  if (name) {
    return async function (dispatch) {
      const apiData = await axios.get(`/countries/?name=${name}`);
      const getArrayByname = apiData.data;

      dispatch({
        type: GET_BY_NAME,
        payload: getArrayByname,
      });
    };
  } else {
    return {
      type: GET_BY_NAME,
      payload: "vacio",
    };
  }
};

export const getActivities = () => {
  return async function (dispatch) {
    const apiData = await axios.get("/activities/");
    const getAllActivities = apiData.data;

    dispatch({
      type: GET_ACTIVITIES,
      payload: getAllActivities,
    });
  };
};

export const orderByContinent = (continentName) => {
  return {
    type: ORDER_BY_CONTINENT,
    payload: continentName,
  };
};

export const orderByActivity = (activityName) => {
  return {
    type: ORDER_BY_ACTIVITY,
    payload: activityName,
  };
};

export const sortAlph = (order) => {
  return {
    type: SORT_ALPHABETICAL,
    payload: order,
  };
};

export const sortPopulation = (order) => {
  return {
    type: SORT_POPULATION,
    payload: order,
  };
};
