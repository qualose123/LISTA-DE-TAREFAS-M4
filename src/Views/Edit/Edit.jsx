import './Edit.css'
import React, { useState,useParams } from 'react';
import { StyledButton } from "../../Styles/styled-components";
function Edit() {
 //state dos itens do edit
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

  const { id } = useParams();
  const baseUrl = `http://localhost:8000/tarefas/${id}`;


  // Função para recarregar a página ao criar uma tarefa
  const handleHomeButton = () => {
    window.location.reload()
  }; 


 
    const handleAddClick = async (id) => {
    if (tarefas) {
     const response = await fetch(baseUrl, {
        method: "PUT",
        body: JSON.stringify(tarefas),
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
      <div className='Edit'>
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

     </div>
     </>
    );
  
  
}

export default Edit