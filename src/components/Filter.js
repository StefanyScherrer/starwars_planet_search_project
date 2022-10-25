// import React, { useContext } from 'react';
// import Context from '../context/context';

// function Filter() {
//   const { NameFilter } = useContext(Context);

//   const handleChangeName = ({ target }) => {
//     const { value } = target;
//     NameFilter(value);
//   };

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           name="name-filter"
//           id="name-filter"
//           data-testid="name-filter"
//           onChange={ handleChangeName }
//         />
//       </form>
//     </div>
//   );
// }

// export default Filter;
import React, { useContext } from 'react';
import Context from '../context/context';

export default function Filters() {
  const {
    planetInput,
    setPlanetInput,
    setSelectColumn,
    selectColumn,
    setSelectedFilters,
    selectedFilters,
    dataFilter,
    listPlanets,
  } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        name="planetInput"
        data-testid="name-filter"
        value={ planetInput }
        onChange={ (({ target }) => setPlanetInput(target.value)) }
      />
      <select
        data-testid="column-filter"
        name="column"
        value={ selectColumn.column }
        onChange={ ({ target }) => setSelectColumn((prevSelected) => ({
          ...prevSelected, column: target.value,
        })) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="column"
        value={ selectColumn.comparison }
        onChange={ ({ target }) => setSelectColumn((prevSelected) => ({
          ...prevSelected, comparison: target.value,
        })) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="filterValue"
        value={ selectColumn.value }
        onChange={ ({ target }) => setSelectColumn((prevSelected) => ({
          ...prevSelected, value: target.value })) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setSelectedFilters((prevState) => ([
            ...prevState,
            selectColumn,
          ]));
          dataFilter(listPlanets, planetInput, selectedFilters);
        } }
      >
        Filtrar
      </button>
      {
        selectedFilters.map((filter, index) => (
          <div className="selectedFilters" key={ index }>
            <span>
              {filter.column}
              {' '}
              {filter.comparison}
              {' '}
              {filter.value}
            </span>
          </div>
        ))
      }
    </div>
  );
}
