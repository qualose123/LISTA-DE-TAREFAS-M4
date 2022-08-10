import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Create.css";
function Create() {
  const baseURL = "http://localhost:8000/tarefas";

  //STATE PARA CADA ITEM
  const [titulo, setTitulo] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  //Aki estou informando que a cada item um state pra ele
  const data = {
    description: descricao,
    objective: objetivo,
    imagem: imagem,
    title: titulo,
  };
  // constante para guardar uma rota
  const Navigate = useNavigate();

  //aqui estamos fazendo a requisição tipo post para Cadastrar
  function Submit(s) {
    s.preventDefault();
    //Aki ele informa a URL da API e quais dados serão enviados 
    axios.post(baseURL, data).then(Navigate("/"));
  }

  return (
    <div>
      <fieldset>
        <legend>Adicionar Nova Tarefa</legend>
        <div className="Form-New-Task">
          <input
          /*Aki informa o state a qual esse input representa*/
            value={titulo}
            type="text"
            /*Aki acio*/ 
            onChange={(s) => setTitulo(s.target.value)}
            className="Form"
            placeholder="Digite um Título"
          />
          <input
            value={objetivo}
            type="text"
            onChange={(s) => setObjetivo(s.target.value)}
            className="Form"
            placeholder="Objetivo da Tarefa"
          />
          <input
            value={imagem}
            type="url"
            onChange={(s) => setImagem(s.target.value)}
            className="Form"
            placeholder="Digite o Link da imagem da Tarefa Ex: https://img/google.png"
          />
          <textarea
            value={descricao}
            onChange={(s) => setDescricao(s.target.value)}
            placeholder="Uma breve descrição da Tarefa"
            className="Form"
          ></textarea>
          <button onClick={Submit} className="Form">
            CADASTRAR
          </button>
        </div>
      </fieldset>
    </div>
  );
}
export default Create;
