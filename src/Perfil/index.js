import React from "react";
import { MenuNav } from "../Inicio/Components/MenuNav";
import {Col,Row,Table, Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'react-bootstrap';


function Perfil(){
    return (
        <React.Fragment>
            <MenuNav></MenuNav>
            <Row>
                 <Col className="col-4">
                    <Row>
                        <h5 className="text-center pt-4">Deiby graciano</h5>
                    </Row>
                    <Row> 
                        <img width='400px' src='https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?size=626&ext=jpg'></img>
                    </Row>
                    <Row><h7 className="text-center pt-4"> Cedula</h7></Row>
                    <Row><h7 className="text-center "> 1035283000</h7></Row>
                    <Row><h7 className="text-center pt-4"> Celular</h7></Row>
                    <Row><h7 className="text-center "> 3046758241</h7></Row>
                 </Col>
                 <Col >
                    <Row >
                      <h5 className="text-center pt-4"> Información</h5>
                      <p className="text-center pt-4 col-10">This snippet is based on the counter example from the previous page, but we added a new feature to it: we set the document title to a custom message including the number of clicks.

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before. </p>

                    </Row>
                    <Row >
                      <h5 className="text-center pt-4"> Habilidades</h5>
                      <p className="text-center pt-4 col-10">This snippet is based on the counter example from the previous page, but we added a new feature to it: we set the document title to a custom message including the number of clicks.

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before. </p>

                    </Row>
                  </Col>
            </Row>
        </React.Fragment>
    )
}

export {Perfil}