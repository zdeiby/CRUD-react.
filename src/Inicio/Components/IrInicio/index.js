import React,{ useState ,useEffect}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row, Button, Container} from 'react-bootstrap';
import image  from "../../../Img/peakpx.jpg"
import logotipe from "../../../Img/peakpx.jpg"
//import  "./login.css"
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';



function LoginInicio(){
   
    return(
    <React.Fragment >
     
        <Container className="pt-4 pb-4 " >
            <Row className="pt-2 pb-2 bg-secondary">
             
                 <Col>
                    <Row>
                        <Col>
                            <img src={image} width="500px" height="550px"></img>
                        </Col>
                    </Row>
                </Col>
              
                 <Col className="text-center pt-4">
                    <h2 className="pb-4">No haz ingresado tus datos de usuario</h2>
                    
                 <Link to='/'><Button  variant="dark">click aquì para ingresar</Button ></Link>
                 </Col>
               
            </Row>
        </Container>
    </React.Fragment>
    )
}

export {LoginInicio};
