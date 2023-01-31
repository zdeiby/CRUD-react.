
import React,{ useState ,useEffect}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row, Button, Container} from 'react-bootstrap';
import image from "../Img/peakpx.jpg"
import logotipe from "../Img/logtipo.jpg"
import  "./login.css"
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { Inicio } from "../Inicio";

function LoginUI(){
  
        const [nameLogin,setNameLogin] = React.useState('desconocido')
    

        const [data, setData] = useState([]);
    
        useEffect(()=>{
       fetch('https://django-deiby.herokuapp.com/')
          .then(response => response.json())
          .then(data => setData(data))
      }, []);
    
    
    
    let [state, values]= React.useState({
        data:data,
        form:{
            cc:'',
            celular:'',
        }
    })
    
    
    
    const [ok, setOK] = React.useState()
    useEffect(()=>{
       
    },[ok])
    
    
    let handleChange=e=>{
       let datos={form:{
            ...state.form,
            [e.target.name]:e.target.value,
        }}
        values({
            
        data:data,
          form:{   
          ...state.form,
          [e.target.name]:e.target.value,
      
          }
        })
    
    
        let lista=state.data
        let formulario=datos.form
        console.log(datos)
        console.log(lista)
        for(let i=0; i<lista.length;i++){
            if(formulario.celular == lista[i].celular){
               if(formulario.cc == lista[i].cc){
                 setNameLogin(lista[i].personaje)
                 localStorage.setItem('nombre', lista[i].personaje)
                console.log(nameLogin)
               setOK('/inicio')
                console.log(ok)
               
               }
            }
            else {
               
            }
           }
      
      }
    
    const [show, setShow] = useState(false);
    
    function validacion(){
     console.log(ok)
     if(ok != '/inicio'){
        console.log("mal")
        setShow(true)
     }
       
    }
    return(
        <React.Fragment >
     
          <Alert show={show} variant="success">
        <Alert.Heading>Datos Erroneos</Alert.Heading>
        <p>
         Intente nuevamente
        </p>
        <hr />
        <div className="d-flex justify-content-end">
        <Link to="/"> <Button onClick={() => setShow(false)} variant="outline-success">
           cerrar
          </Button></Link>
        </div>
      </Alert>
        <Container className="pt-4 pb-4 " >
            <Row className="pt-2 pb-2 bg-secondary">
             
                 <Col>
                    <Row>
                        <Col>
                            <img src={image} width="500px" height="550px"></img>
                        </Col>
                    </Row>
                </Col>
                 <Col>
                    <Row className="row justify-content-center pt-4"><Col className="col-4"><h2>&nbsp;Login</h2></Col></Row>
                    <Row className="row justify-content-center pt-4"><Col className="col-4"><img src={logotipe} className="logotipo"></img></Col></Row>
                    <Row className="row justify-content-center pt-4"><Col className="col-4"><h10>Ingrese su celular</h10></Col></Row>
                    <Row className="text-center pt-2 "><input type="text" className="mt-2 form-control nombre" onChange={handleChange} name="celular"></input></Row>
                    <Row className="row justify-content-center pt-4"><Col className="col-4"><h10>Ingrese su cedula</h10></Col></Row>
                    <Row className="text-center pt-2"><input className="mt-2 form-control nombre" type="text" onChange={handleChange} name="cc"></input></Row>
                    <Row className="pt-4 text-center"><Col><Link to={ok}><Button onClick={validacion} variant="dark">Ingresar</Button ></Link></Col><Col><Link to="/register"><Button variant="dark">Registrarse</Button></Link></Col></Row>
                    <Row className="text-center pt-2"><h12>¿Olvidó su contraseña?</h12></Row>
                </Col>  
            </Row>
        </Container>
    </React.Fragment>
    )
    
}

export {LoginUI}