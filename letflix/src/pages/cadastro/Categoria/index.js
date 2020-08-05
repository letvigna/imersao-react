import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [nomeCategoria, setNomeCategoria] = useState('');

  return (
    <DefaultTemplate>
      <h1>Cadastro de Categoria: {nomeCategoria}</h1>
      <form onSubmit={event => {
        event.preventDefault();
        setCategorias([
          ...categorias,
          nomeCategoria
        ]);
      }}>
        <label>
          Nome da Categoria:
          <input
            type="text"
            onChange={event => {
              setNomeCategoria(event.target.value);
            }}
          />
        </label>
        <button>
          Cadastrar
        </button>
      </form>
      <Link to="/">
        Ir para home
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroCategoria;
