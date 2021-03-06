import React from 'react';
import { Link } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';

function CadastroVideo() {
  return (
    <DefaultTemplate>
      <h1>Cadastro de Vídeo</h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroVideo;
