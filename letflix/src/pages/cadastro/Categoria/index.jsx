import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const categoria = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [novaCategoria, setNovaCategoria] = useState(categoria);
  const [categorias, setCategorias] = useState([]);

  const handleChange = (event) => {
    const campo = event.target.getAttribute('name');
    const valor = event.target.value;
    setNovaCategoria({
      ...novaCategoria,
      [campo]: valor,
    });
  };

  return (
    <DefaultTemplate>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        // Adiciona a nova categoria ao array de categorias
        setCategorias([
          ...categorias,
          novaCategoria,
        ]);
        // "Limpa" o formulário com os valores default
        setNovaCategoria(categoria);
      }}
      >
        <FormField
          label="Nome"
          name="nome"
          type="text"
          value={novaCategoria.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={novaCategoria.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={novaCategoria.cor}
          onChange={handleChange}
        />

        <br />
        <Button>
          Cadastrar
        </Button>
      </form>
      <br />
      <Link to="/">
        Ir para home
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroCategoria;
