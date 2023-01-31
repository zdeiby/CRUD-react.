import React , { useState ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row, Button, Container} from 'react-bootstrap';
//import image from "./peakpx.jpg"
import logotipe from "../Img/logtipo.jpg"
import  "../Login/login.css"
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function Register(){
    
    const [dataApp, setDataApp] = useState();
    const [response, setResponse] = useState({});
    useEffect(()=>{
     postData(dataApp)
    },[dataApp])

    async function postData(datosd) {
    try {
      const res = await fetch('https://django-deiby.herokuapp.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosd)
      });
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      setResponse({ error });
    }
  }

  let [state,values]=React.useState(
    {
     form:{
        personaje:'',
        cc:'',
        celular:''
      },
    } 
  )

  function handleChange(e){
    values({form:{   
        ...state.form,
        [e.target.name]:e.target.value,
    
        }})
        console.log(state)
  }

  function sendInfo(){
    let values= {...state.form}
    console.log(values)
    setDataApp(values)
    setShow(true)
   
  }

  const [show, setShow] = useState(false);
    return(
        
        <React.Fragment>
         <Alert show={show} variant="success">
        <Alert.Heading>Registro completo</Alert.Heading>
        <p>
         Sus datos han sido ingresados correctamente
        </p>
        <hr />
        <div className="d-flex justify-content-end">
        <Link to="/"> <Button onClick={() => setShow(false)} variant="outline-success">
            Click aqui para ir a login
          </Button></Link>
        </div>
      </Alert>
        <Container className="text-center ">
            <Row ><h2 className="text-success">Registrarse</h2></Row>
            <Row className="row justify-content-center pt-4"><Col className="col-4"><img src={logotipe} className="logotipo"></img></Col></Row>
            <Row className="pt-4"><h10 >Ingrese su nombre</h10></Row>
            <Row className="pt-2 text-center"><input type="text" className="mt-2 form-control" onChange={handleChange} name='personaje'></input></Row>
            <Row className=" pt-4"><h10>Ingrese su cedula</h10></Row>
            <Row className="pt-4 text-center"><input className="mt-2 form-control " type="text" onChange={handleChange} name='cc'></input></Row>
            <Row className="pt-4"><h10>Ingrese su celular</h10></Row>
            <Row className="pt-2 text-center"><input type="text" className="mt-2 form-control" onChange={handleChange} name='celular'></input></Row>
            <Row className="pt-4 text-center"><Col ><Button variant="success" onClick={()=>sendInfo()} >Registrarse</Button></Col></Row>
    
        </Container> 
        </React.Fragment>
    )
}

export default Register;