import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getCountries, getActivities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersBar from "../../components/FiltersBar/FiltersBar";

const Home = () => {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  // console.log(allCountries); //! CONSOLE Revisar activities en estado global
  console.log(allActivities); //! CONSOLE Revisar activities en estado global

  return (
    <div>
      <h1>Estoy en Home</h1>

      <SearchBar />
      <FiltersBar />
      <CardsContainer />
    </div>
  );
};

export default Home;
