import "./Details.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Details() {
  const { id } = useParams();
  
  const baseUrl = `http://localhost:8000/tarefas/${id}`;

  const [detalhes, setDetalhes] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setDetalhes(response.data);
    });
  }, []);

  return (
    <>
       
      {detalhes && (
        
        <div className="Details">
           <h1 className='Titulo-D'> To Do List </h1>
          <div className="Container-Details">
            <Card className="card-details" style={{ width: "18rem" }}>
              <Card.Img variant="top" className="IMGG" src={detalhes.imagem} />
              <Card.Body>
                <Card.Title>Título:{detalhes.title}</Card.Title>
                <Card.Text>Objetivo:{detalhes.objective}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Descrição:{detalhes.description}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
            <Button variant="outline-info">
              <Link className="DT-LINK" to="/">
                Home
              </Link>
            </Button>{" "}
          </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
