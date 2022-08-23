import { useState } from "react";
import { StyledButton } from "../../Styles/styled-components";
import "./Create.css";

function Create() {
  //state dos itens do create
  const [tarefas,setTarefas]= useState({
    title:"",
    objective:"",
    imagem:"",
    description:""
  })

  //capturador do valor dos inputs
  function HandleChange(e){
    setTarefas((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  // Função para recarregar a página ao criar uma tarefa
  const handleHomeButton = () => {
    window.location.reload()
  };


//funçao para ligar o state aos json da api
  const handleAddClick = async () => {
    if (tarefas) {
      

     const response = await fetch("http://localhost:8000/tarefas", {
        method: "POST",
        body: JSON.stringify(
        tarefas,
        ),
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
            name="title"
            type="text"
            onChange={ (e) => HandleChange(e)}
            className="Form"
            placeholder="Digite um Título (MAX. 24 CHARACTERES)"
          />
          <input
            maxLength={27}
            name="objective"
            type="text"
            onChange={(e) => HandleChange(e)}
            className="Form"
            placeholder="Objetivo da Tarefa(MAX. 27 CHARACTERES)"
          />
          <input
            name="imagem"
            type="url"
            onChange={(e) => HandleChange(e)}
            className="Form"
            placeholder="Digite o Link da imagem da Tarefa Ex: https://img/google.png"
          />
          <textarea
            name="description"
            onChange={(e) => HandleChange(e)}
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
