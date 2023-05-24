import styles from "./PaginationV2.module.css";

const PaginationV2 = ({
  totalCards,
  cardsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handleChange = (event) => {
    const numberPage = parseInt(event.target.value);
    if (numberPage >= 1 && numberPage <= totalPages) {
      setCurrentPage(numberPage);
    } else {
      event.target.value = ""; // Establecer el valor del input en blanco
    }
  };

  const handleDecreasePage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleIncreasePage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className={styles.paginationContainer}>
        <button onClick={handleDecreasePage} disabled={currentPage < 2}>
          &lt;
        </button>
        {/* Botón para disminuir */}
        <button
          onClick={handleIncreasePage}
          disabled={
            totalPages > 1 ? currentPage > totalPages - 1 : currentPage === 1
          }
        >
          &gt;
        </button>
        {/* Botón para disminuir */}
        <input
          name="page"
          type="number"
          inputMode="numeric"
          min="1"
          max={totalPages}
          onChange={handleChange}
          value={currentPage}
        />
        <span className={styles.totalPages}>{`de ${totalPages}`}</span>
      </div>
    </div>
  );
};

export default PaginationV2;
