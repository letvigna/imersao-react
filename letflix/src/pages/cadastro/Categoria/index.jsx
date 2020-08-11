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
    /*
    ===+ Destructuring +===
    Cria variáveis com o mesmo nome do atributo desejado:
      → getAttribute = event.target.getAttribute()
      → value = event.target.value

    const { getAttribute, value } = event.target;
    setNovaCategoria({
      ...novaCategoria,
      [getAttribute('name')]: value,
    });
    */
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
        {/*
        Se quiser usar:
          input => passar o tipo do input através do "type"
          outra tag => passar a tag desejada através do "as"
        */}

        {/* Tag <input> do tipo "text" */}
        <FormField
          label="Nome"
          name="nome"
          type="text"
          value={novaCategoria.nome}
          onChange={handleChange}
        />

        {/* Tag <textarea> */}
        <FormField
          label="Descrição"
          name="descricao"
          as="textarea"
          value={novaCategoria.descricao}
          onChange={handleChange}
        />

        {/* Tag <input> do tipo "color" */}
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
