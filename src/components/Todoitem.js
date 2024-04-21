// Importing Bootstrap in a JavaScript file
// Importing Bootstrap in a JavaScript file
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Todoitem({tasks,onDelete}) {

    const { id, value, completed } = tasks;
    console.log("iam herrrrrrrrrrr");
    console.log(tasks);

function sendValueTo(id){
    onDelete(id);
}

    return (
    

        <Container>

            <Row className="align-items-center d-flex m-3">
                <Col>{value}</Col>
                <Col >
                    <Button variant="danger" onClick={() => sendValueTo(id)}>Delete</Button>
                </Col>
            </Row>



            
         {/* <div className="d-flex">
           <div>{value}</div>
           <div> <button onClick={()=>sendValueTo(id)}>Delete</button></div>
           </div> */
        }
        </Container>



      
    );
}

export default Todoitem;