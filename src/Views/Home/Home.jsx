import { useState, useEffect } from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Create from "../Create/Create";

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



  return (
    <div>
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
         <Create/>

          <div className="container-Mainn">
            {tarefa.map((tarefa, index) => (
              <div className="C-Card" key={index}>
                {/*Abaixo é um card do React-Bootstrap */}
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" className="IMGG" src={tarefa.imagem} />
                  <Card.Body>
                    <Card.Title>{tarefa.title}</Card.Title>
                    <Card.Text>{tarefa.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{tarefa.objective}</ListGroup.Item>
                  </ListGroup>

                  <Card.Body>
                    <Card.Link href="#">Detalhes</Card.Link>
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
