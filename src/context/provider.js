// import PropTypes from 'prop-types';
// import React, { useMemo, useState, useEffect } from 'react';
// import TabelaContext from './context';

// export default function Provider({ children }) {
//   const [planets, setPlanets] = useState();
//   const [numberFilter, setNumberFilter] = useState({
//     coluna: 'population',
//     operador: 'maior que',
//     value: '0',
//   });
//   const [termoDeBusca, setSearchTerm] = useState('');
//   const [buttonClick, setButtonClick] = useState(false);
//   const getValuesFromFilter = (name, value) => {
//     setNumberFilter((prevState) => ({
//       ...prevState, [name]: value,
//     }));
//   };

//   const getPlanets = async () => {
//     const response = await fetch('https://swapi.dev/api/planets');
//     const data = await response.json();
//     const newData = data.results;
//     const filter = newData.filter((planet) => (
//       planet.residents ? delete planet.residents : true));
//     return setPlanets(filter);
//   };

//   useEffect(() => {
//     getPlanets();
//   }, []);

//   const obj = useMemo(() => ({
//     getValuesFromFilter,
//     setSearchTerm,
//     setButtonClick,
//     numberFilter,
//     termoDeBusca,
//     buttonClick,
//     planets,
//   }), [numberFilter, termodeBusca, buttonClick, planets]);
//   return (
//     <div>
//       <TabelaContext.Provider value={ obj }>
//         {children}
//       </TabelaContext.Provider>
//     </div>
//   );
// }
// Provider.propTypes = {
//   children: PropTypes.any,
// }.isRequires;
import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [listPlanets, setListPlanets] = useState([]);

  const url = 'https://swapi.dev/api/planets';

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetch(url).then((response) => response.json());
      console.log(results);
      setListPlanets(results);
    };
    fetchData();
  }, []);

  const listData = useMemo(() => ({
    listPlanets,
  }), [listPlanets]);

  return (
    <Context.Provider value={ listData }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default Provider;
