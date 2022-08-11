import "./Details.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function Details() {
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
