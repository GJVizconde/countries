const FilterByContinent = () => {
  return (
    <div>
      <select id="mySelect" defaultValue="allContinents">
        <option value="Continents">Continents</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
    </div>
  );
};

export default FilterByContinent;
