import React, { useContext } from 'react';
import ReceitasContext from '../context/ReceitasContext';

function Recipes() {
  const { handleRadio, endPoint, busca, handleBusca } = useContext(ReceitasContext);
  return (
    <>
      <label htmlFor="busca">
        Pesquise:
        <input
          type="text"
          name="busca"
          value={ busca }
          data-testid="search-input"
          id="busca"
          onChange={ handleBusca }
        />
      </label>
      <label htmlFor="ingrediente">
        Ingrediente:
        <input
          type="radio"
          name="ingrediente"
          id="ingrediente"
          value="ingrediente"
          data-testid="ingredient-search-radio"
          onChange={ handleRadio }
        />
      </label>
      <label htmlFor="nome">
        Nome:
        <input
          type="radio"
          name="nome"
          id="nome"
          value="nome"
          data-testid="name-search-radio"
          onChange={ handleRadio }
        />
      </label>
      <label htmlFor="letter">
        Primeira letra:
        <input
          type="radio"
          name="letter"
          id="letter"
          value="letter"
          data-testid="first-letter-search-radio"
          onChange={ handleRadio }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ endPoint }
      >
        Pesquisar
      </button>
    </>
  );
}

export default Recipes;
