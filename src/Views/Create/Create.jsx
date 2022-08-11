import { useState } from "react";
import { StyledButton } from "../../Styles/styled-components";
import "./Create.css";

function Create() {
  //state dos itens do create
  const [titulo, setTitulo] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  // Função para recarregar a página ao criar uma tarefa
  const handleHomeButton = () => {
    window.location.reload()
  };
//capturador do valor dos inputs
  const HandleChangeCreateTitle = (e) => {
    setTitulo(e.target.value);
  };
  const HandleChangeCreateobjetivo = (e) => {
    setObjetivo(e.target.value);
  };
  const HandleChangeCreateImagem = (e) => {
    setImagem(e.target.value);
  };
  const HandleChangeCreateDescricao = (e) => {
    setDescricao(e.target.value);
  };
//funçao para ligar o state aos json da api
  const handleAddClick = async () => {
    if (titulo && objetivo && imagem && descricao) {
     const response = await fetch("http://localhost:8000/tarefas", {
        method: "POST",
        body: JSON.stringify({
          title: titulo,
          objective: objetivo,
          imagem: imagem,
          description: descricao,
          userId: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let json = await response.json();
      console.log(json);
      if (json.id) {
        handleHomeButton()
        alert("Tarefa adicionado com Sucesso!");
        
      } else {
        alert("Ocorreu Algum Erro!");
      }
    } else {
      alert("Preencha os dados!");
    }
  };

  return (
    <>
      <fieldset>
        <legend>Adicionar Nova Tarefa</legend>
        <div className="Form-New-Task">
          <input
            maxLength={24}
            value={titulo}
            type="text"
            onChange={HandleChangeCreateTitle}
            className="Form"
            placeholder="Digite um Título (MAX. 24 CHARACTERES)"
          />
          <input
            maxLength={27}
            value={objetivo}
            type="text"
            onChange={HandleChangeCreateobjetivo}
            className="Form"
            placeholder="Objetivo da Tarefa(MAX. 27 CHARACTERES)"
          />
          <input
            value={imagem}
            type="url"
            onChange={HandleChangeCreateImagem}
            className="Form"
            placeholder="Digite o Link da imagem da Tarefa Ex: https://img/google.png"
          />
          <textarea
            value={descricao}
            onChange={HandleChangeCreateDescricao}
            placeholder="Uma breve descrição da Tarefa(MAX. 55 CHARACTERES)"
            className="Form"
            maxLength={55}

          ></textarea>
          <StyledButton onClick={handleAddClick}>
            CADASTRAR       
          </StyledButton>
        </div>
      </fieldset>
    </>
  );
}

export default Create;
