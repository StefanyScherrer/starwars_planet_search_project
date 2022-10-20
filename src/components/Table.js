import React, { useEffect, useState } from 'react';

export default function Table() {
  const [planets, setPlanets] = useState();
  const getPlanets = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    const newData = data.results;
    const filter = newData.filter((planet) => (
      planet.residents ? delete planet.residents : true));
    return setPlanets(filter);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  console.log(planets);

  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
        {planets && planets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
