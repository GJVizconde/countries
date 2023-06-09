import {
  GET_ACTIVITIES,
  GET_BY_NAME,
  GET_COUNTRIES,
  ORDER_BY_CONTINENT,
  ORDER_BY_ACTIVITY,
  SORT_ALPHABETICAL,
  SORT_POPULATION,
} from "./actions";

const initialState = {
  allCountries: [],
  showCountries: [],
  allActivities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      let allCountries = [...action.payload];
      allCountries = allCountries.sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        allCountries: allCountries,
        showCountries: allCountries,
      };

    case GET_BY_NAME:
      // console.log(action.payload); //! CONSOLE  esta  PASANDO LO QUE ESCRIBO EN INPUT
      // console.log(state.showCountries); //!CONSOLE   esta pasando el array de paises
      // console.log(state.showCountries[0].name); //! Esta pasando el nombre de Gibraltar

      // const findedCountries = state.showCountries.filter(
      //   (country) => country.name.toLowerCase() === action.payload.toLowerCase()
      // );

      // console.log(findedCountries); //!CONSOLE

      let findedCountries = [];

      if (action.payload === "vacio") {
        findedCountries = state.allCountries;
      } else {
        findedCountries = action.payload;
      }

      return {
        ...state,
        showCountries: findedCountries,
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

    case ORDER_BY_ACTIVITY:
      const activitySubmitted = action.payload;
      let orderByActivity = [];
      if (activitySubmitted === "Activity")
        orderByActivity = state.allCountries;
      else {
        const matchActivity = state.allActivities.filter(
          (activity) => activity.name === activitySubmitted
        );
        // console.log(matchActivity);

        const arrayCountries = matchActivity[0].countries.map((country) =>
          Object.values(country)
        );
        // console.log(arrayCountries);

        const unifiedCountries = [].concat(...arrayCountries);
        // console.log(unifiedCountries);

        orderByActivity = state.allCountries.filter((country) =>
          unifiedCountries.includes(country.name)
        );

        // console.log(countriesByActivity);
      }

      return {
        ...state,
        showCountries: orderByActivity,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
      };

    // case SORT_ALPHABETICAL:
    //   let ordering = [];
    //   console.log("Estoy en reducer", action.payload);
    //   if (action.payload === "Order") {
    //     ordering = state.allCountries.sort((a, b) =>
    //       a.name.localeCompare(b.name)
    //     );
    //   }
    //   if (action.payload === "Reverse") {
    //     ordering = state.allCountries.sort((a, b) =>
    //       b.name.localeCompare(a.name)
    //     );
    //   }
    //   return {
    //     ...state,
    //     showCountries: ordering

    //   };

    case SORT_ALPHABETICAL:
      let orderByAlph = [...state.showCountries];
      if (action.payload === "Order") {
        orderByAlph = orderByAlph.sort((a, b) => a.name.localeCompare(b.name));
        console.log(orderByAlph);
      }
      if (action.payload === "Reverse") {
        orderByAlph = orderByAlph.sort((a, b) => b.name.localeCompare(a.name));
        console.log(orderByAlph);
      }

      return {
        ...state,
        showCountries: orderByAlph,
      };

    case SORT_POPULATION:
      let orderByPop = [...state.showCountries];

      if (action.payload === "Population") {
        orderByPop = state.allCountries;
      }

      if (action.payload === "Ascendent") {
        orderByPop = orderByPop.sort((a, b) => a.population - b.population);
        console.log(orderByPop);
      }
      if (action.payload === "Descendent") {
        orderByPop = orderByPop.sort((a, b) => b.population - a.population);
        console.log(orderByPop);
      }

      return {
        ...state,
        showCountries: orderByPop,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
