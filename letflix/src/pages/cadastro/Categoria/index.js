import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const categoria = {
    nome: '',
    descricao: '',
    cor: ''
  };
  const [novaCategoria, setNovaCategoria] = useState(categoria);
  const [categorias, setCategorias] = useState([]);

  const handleChange = event => {
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
  }

  return (
    <DefaultTemplate>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={event => {
        event.preventDefault();

        // Adiciona a nova categoria ao array de categorias
        setCategorias([
          ...categorias,
          novaCategoria
        ]);

        // "Limpa" o formulário com os valores default
        setNovaCategoria(categoria);
      }}>
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
          type="text"
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
        <button>
          Cadastrar
        </button>
      </form>
      {/*
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      */}
      <br />
      <Link to="/">
        Ir para home
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroCategoria;
