import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getCountries, getActivities } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersBar from "../../components/FiltersBar/FiltersBar";

const Home = () => {
  const dispatch = useDispatch();
  // const allActivities = useSelector((state) => state.allActivities); //! Esto es solo para chequear si carga todo bien
  // const allCountries = useSelector((state) => state.allCountries); //! Esto es solo para chequear si carga todo bien

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  // console.log(allCountries); //! CONSOLE Revisar activities en estado global
  // console.log(allActivities); //! CONSOLE Revisar activities en estado global

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
