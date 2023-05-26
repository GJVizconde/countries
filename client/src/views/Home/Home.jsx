import style from "./Home.module.css";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getCountries, getActivities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersBar from "../../components/FiltersBar/FiltersBar";
// import Pagination from "../../components/Pagination/Pagination";
import PaginationV2 from "../../components/PaginationV2/PaginationV2";

const Home = () => {
  const dispatch = useDispatch();

  // let showActivities = useSelector((state) => state.allActivities); //! Trayendo del estado global a showActivities
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

  const [currentPage, setCurrentPage] = useState(1); // Estados para la paginacion1 Pagina actual
  const [cardsPerPage, setCardsPerPage] = useState(10); // Estados para la paginacion2 Cantidad de Cards/page

  const lastCardIndex = currentPage * cardsPerPage; // ultima que se muestra en page
  const firstCardIndex = lastCardIndex - cardsPerPage; // primera carta que se muestra en page

  const currentCards = showCountries.slice(firstCardIndex, lastCardIndex); // cartas actuales con slice que corta el array en elemento inicial y final

  return (
    <div className={style.container}>
      <h1>Countries</h1>

      <div className={style.searchBar}>
        <SearchBar />
      </div>
      {/* <Pagination
        totalCards={showCountries.length} // Total Cards length del objeto todos los paises
        cardsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
      /> */}
      <div className={style.varios}>
        <div className={style.PaginationV2}>
          <PaginationV2
            totalCards={showCountries.length} // Total Cards length del objeto todos los paises
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setCardsPerPage={setCardsPerPage}
          />
        </div>
        <div className={style.filterAndCards}>
          <div className={style.filtersBar}>
            <FiltersBar setCurrentPage={setCurrentPage} />
          </div>
          <div className={style.cardsContainer}>
            <CardsContainer showCountries={currentCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
