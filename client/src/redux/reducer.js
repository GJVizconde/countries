import {
  GET_ACTIVITIES,
  GET_BY_NAME,
  GET_COUNTRIES,
  ORDER_BY_CONTINENT,
} from "./actions";

const initialState = {
  allCountries: [],
  showCountries: [],
  allActivities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        showCountries: action.payload,
      };

    case GET_BY_NAME:
      // console.log(action.payload); //! CONSOLE  esta  PASANDO LO QUE ESCRIBO EN INPUT
      // console.log(state.showCountries); //!CONSOLE   esta pasando el array de paises
      // console.log(state.showCountries[0].name); //! Esta pasando el nombre de Gibraltar

      // const findedCountries = state.showCountries.filter(
      //   (country) => country.name.toLowerCase() === action.payload.toLowerCase()
      // );

      // console.log(findedCountries); //!CONSOLE

      return {
        ...state,
        showCountries: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
      };

    case ORDER_BY_CONTINENT:
      let orderByContinent = [];
      if (action.payload === "Continents")
        orderByContinent = state.allCountries;
      else {
        orderByContinent = state.allCountries.filter(
          (country) => country.continent === action.payload
        );
      }

      return {
        ...state,
        showCountries: orderByContinent,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
