import React from 'react';
import { Link } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';

function CadastroCategoria() {
  return (
    <DefaultTemplate>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">
        Ir para home
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroCategoria;
