import "./Details.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import {useState,} from 'react'
import {Link, useParams } from 'react-router-dom'
function Details() {

const [tarefa,setTarefa] = useState({})

const params = useParams()
    const{id} = params
    console.log(id)

    async function getTarefaByID(){
      const response = await fetch(`http://localhost:8000/tarefas/${id}`)
      const tarefaById = await response.json()
      setTarefa({...tarefaById})
  }


  
  return (
    <div className="Details">
      <h1 className="Title"> To Do List </h1>
      <div className="Container-Details">
        <Card className="card-details" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            className="IMGG"
            // src={tarefa.imagem}
          />
          <Card.Body>
            <Card.Title>Título:{}</Card.Title>
            <Card.Text>Objetivo:{}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Descrição:{}</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            <Button variant="outline-info">
              <Link className="DT-LINK" to="/details">
                Detalhes
              </Link>
            </Button>{" "}
          </Card.Body>
        </Card>
      </div>
      <Button className="Link-Home" variant="primary">
        <Link className="Link" to="/">Home</Link>
      </Button>{" "}
    </div>
  );
}

export default Details;
