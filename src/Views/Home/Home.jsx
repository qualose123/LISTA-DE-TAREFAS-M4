import { useState, useEffect } from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Create from "../Create/Create";
import { Link } from "react-router-dom";
import Editar from '../../Assets/Icons/Editar.png'
import axios from "axios";

function Home() {
  //state do getall
  const [tarefa, setTarefa] = useState([]);
  //state do loading
  const [loading, setLoading] = useState(false);

  const getAllTarefas = async () => {
    // Aki ele tenta fazer a requisição, e se der erro ele para e vai pro catch
    try {
      //aki faz com q o spinner apareça antes e durante a requisição a API
      setLoading(true);
      //diz q é uma func asyncrona
      //faz requisição e espera a resposta, e guarda essa resposta
      let response = await fetch("http://localhost:8000/tarefas");
      //Espera a resposta e transforma ela em json e salva o mesmo na variavel
      let json = await response.json();
      //esse aki faz com que o spinner suma, após a requisição da API
      setLoading(false);
      //aki está a resposta json, aki faço o que quiser cm ela
      setTarefa(json);
      //o Catch ele recebe o erro como parâmetro e eu faço o que quiser com essa informação, como por exemplo setLoading(false) para o spinner de carregar
    } catch (e) {
      setLoading(false);
      alert("Erro, por favor recarregue a página ou tente conectar mais tarde");
      //AKI ele exibe o error no console
      console.error(e);
    }
  };

  useEffect(() => {
    getAllTarefas();
  }, []);



  // DELETAR TAREFAS
  const [tarefaDeletada, setTarefaDeletada] = useState({});
 
  async function deleteTarefa(id) {
    try{
    const response = await fetch(`http://localhost:8000/tarefas/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const response_tarefa_deletada = await response.json();
    setTarefaDeletada(response_tarefa_deletada);
    alert("Tarefa Deletada com sucesso!")
  }catch(e){
    alert("Erro ao deletar, por favor recarregue a página!");
      //AKI ele exibe o error no console
      console.error(e);
  }
  }



  useEffect(() => {
    getAllTarefas();
  }, [tarefaDeletada]); // Ao passar apenas a função sem um valor no colchetes, ele renderizará a função passada no useEffect apenas na primeira renderização, se colocar algum valor dentro do colchetes, ele renderizará sempre que o valor entre colchetes for alterado.




  return (
    <div>
       <h1 className='Title'> To Do List </h1>
      {/* Esse Loading abaixo exibe um spinner de giratorio com a palavra loading, enquanto o site estiver requisitando */}
      {loading && (
        <div>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>{" "}
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      )}

      {/*Esse Loading, esconde o spinner loading após a requisição está completa e exibe o código abaixo*/}
      {!loading && (
        <>
          <Create />
        <h2 className="ListCardTitle">Tarefas</h2>
          <div className="container-Mainn">
            {tarefa.map((tarefa, index) => (
              <div className="C-Card" key={index}>
                {/*Abaixo é um card do React-Bootstrap */}
                <Card className="card-MAX" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    className="IMGG"
                    src={tarefa.imagem}
                  />
                  <div>
                  <img className="ICON-EDIT" src={Editar}/>
                  </div>
                  <Card.Body>
                    <Card.Title>Título:{tarefa.title}</Card.Title>
                    <Card.Text>Objetivo:{tarefa.objective}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Descrição:{tarefa.description}</ListGroup.Item>
                  </ListGroup>

                  <Card.Body className="Button-Card">
                    <Button variant="outline-info">
                      <Link className="DT-LINK" to={`/details/${tarefa.id}`}>
                        Detalhes
                      </Link>
                    </Button>{" "}
                    <Button   onClick={() => deleteTarefa(tarefa.id)}
                id={tarefa.id} className="del" variant="danger">Deletar</Button>{' '}
              
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
