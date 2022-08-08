import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Home() {
  const [tarefa, setTarefa] = useState([]);

//READ ALL
const getAllTarefas=()=>{
    fetch('http://localhost:8000/tarefas')
    .then((response)=>{
        return response.json()
    })
    .then((json)=>{
        setTarefa(json)
    })
}

useEffect(()=>{
    getAllTarefas()
},[])


  return(
        <div>
            <div>
      
            <h1> total: {tarefa.title}</h1>
            </div>
            <div>
                {tarefa.map((tarefa,index)=>(
                    <div key={index}>
                        {/* <div>
                        <img src={tarefa.imagem}  />
                        </div>
                        <div>
                        <h4>Título: {tarefa.title}</h4>
                        <p>Descrição: {tarefa.description}</p>
                        </div> */}
                        
                        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tarefa.imagem} />
      <Card.Body>
        <Card.Title>{tarefa.title}</Card.Title>
        <Card.Text>
          {tarefa.description   }
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{tarefa.objective}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Editar</Card.Link>
        <Card.Link href="#">Deletar</Card.Link>
      </Card.Body>
    </Card>

                    </div>
                ))}
            </div>
      </div>
  )

}

export default Home;
