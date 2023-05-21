import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getCountries, getActivities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  let showActivities = useSelector((state) => state.allActivities); //! Trayendo del estado global a showActivities
  let showCountries = useSelector((state) => state.showCountries); //! Trayendo del estado global a showCountries

  useEffect(() => {
    dispatch(getCountries()); //! Al montar traemos todos los paises
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities()); //! Al montar traemos todos las actividades
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(showCountries); //!CONSOLE Debe Mostrar cuando actualiza el estado showCountries
  // }, [showCountries]);

  // useEffect(() => {
  //   console.log(showActivities); //!CONSOLE Debe Mostrar cuando actualiza el estado showActivities
  // }, [showActivities]);

  const [currentPage, setCurrentPage] = useState(1); //! Estados para la paginacion
  const [cardsPerPage, setCardsPerPage] = useState(10);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentCards = showCountries.slice(firstCardIndex, lastCardIndex);

  return (
    <div>
      <h1>Estoy en Home</h1>

      <SearchBar />
      <FiltersBar />
      <Pagination
        totalCards={showCountries.length}
        cardsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <CardsContainer showCountries={currentCards} />
    </div>
  );
};

export default Home;
