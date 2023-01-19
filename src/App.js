import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'react-bootstrap';
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import React, { useState } from 'react';


const data= [
  {id:1, personaje:"carlos acevedo", cc:103629343, celular:"3046758241"},
  {id:2, personaje:"Deiby Graciano", cc:103629344, celular:"3046758242"},
  {id:3, personaje:"Andres perez", cc:103629345, celular:"3046758243"},
  {id:4, personaje:"Luis Hincapie", cc:103629346, celular:"3046758244"},
  {id:5, personaje:"carlos acevedo", cc:103629343, celular:"3046758241"},
  {id:6, personaje:"Deiby Graciano", cc:103629344, celular:"3046758242"},
  {id:7, personaje:"Andres perez", cc:103629345, celular:"3046758243"},
  {id:8, personaje:"Luis Hincapie", cc:103629346, celular:"3046758244"},
];



function App() {
  let [state,values]=React.useState(
    {
      data:data,
     
      form:{
        id:'',
        personaje:'',
        cc:'',
        celular:''
      },
      modalInsertar: false,
      modalEditar:false,
    } 
  )

 console.log(state)
let handleChange=e=>{
  values({
    modalInsertar:true,
  
    form:{   
    ...state.form,
    [e.target.name]:e.target.value,

    }
  })

}

let handleChangeE=event=>{
  values({
    modalEditar:true,
    form:{   
      id:state.form.id,
    ...state.form,
    [event.target.name]:event.target.value,

    }
  })

}



const mostrarModalInsertar=()=>{
  values(
    {
      data:data,
     
      form:{
        id:'',
        personaje:'',
        cc:'',
        celular:''
      },
      modalInsertar: true,
      modalEditar:false,
    } )
  

}
const ocultarModalInsertar=()=>{
  values( {
    data:data,
   
    form:{
      id:'',
      personaje:'',
      cc:'',
      celular:''
    },
    modalInsertar: false,
    modalEditar:false,
  } )

}

const mostrarModalEditar=(registro)=>{
  values({
    form:registro,
    modalEditar: true,
    })

}
const ocultarModalEditar=()=>{
  values( {
    data:data,
   
    form:{
      id:'',
      personaje:'',
      cc:'',
      celular:''
    },
 
    modalEditar:false,
  } )

}

let insertar=()=>{

let valorNuevo={...state.form}

valorNuevo.id=data.length+1
let nuevo=data.push(valorNuevo);
values({
    data:nuevo,
    form:valorNuevo,

  } )


}

let editar=(dato)=>{
  let contador=0;
  let lista=data;
  console.log(lista)
  lista.map((registro)=>{
    if(dato.id==registro.id){
      lista[contador].personaje=dato.personaje;
      lista[contador].cc=dato.cc;
      lista[contador].celular=dato.celular;
    }
    contador++;
  });
  values({data: lista,form:dato});
}

let eliminar=(dato)=>{
  let opcion=window.confirm("realmente desea eliminar el registro"+ dato.id);
  if(opcion){
    let contador=0;
    let lista=data;
    lista.map((registro)=>{
      if(registro.id==dato.id){
      lista.splice(contador,1);
    }
      contador++;
    })
    values({data:lista, form:dato})
  }
}

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <React.Fragment>
      <Row >
    <Col sm="auto" className='bg-success text-light '>
  <div>
    <Navbar color="faded" light>
      <NavbarBrand href="/" className="me-auto">

      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="me-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
            📅 <a><b>Tablero</b></a> <br></br>
            </NavLink>
            <NavLink>
              👥 <a ><b>Usuarios</b></a><br></br>   
            </NavLink>
            <NavLink>     
              📊<a><b>Estadisticas</b></a><br></br></NavLink>
            <NavLink>  
                    👤 <a><b>Perfil</b></a><br></br></NavLink>
            <NavLink>  
              ⚙️ <a><b>Ajustes</b></a></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>


    </Col>

   
      <Col>
  <br/>
   <Button variant='success' onClick={() =>mostrarModalInsertar()}>Insertar un nuevo usuario</Button>
   <br/><br/>
  <Table>
    <thead><tr>
      <th>Id</th>
      <th>Personaje</th>
      <th>cc</th>
      <th>celular</th>
    </tr></thead>
    <tbody>
      {data.map((elemento)=>(
        <tr>
          <td>{elemento.id}</td>
          <td>{elemento.personaje}</td>
          <td>{elemento.cc}</td>
          <td>{elemento.celular}</td>
         <td> <Button variant='primary' onClick={()=>mostrarModalEditar(elemento)}>Editar</Button></td>
         <td> <Button variant="danger" onClick={()=>eliminar(elemento)}>Eliminar</Button> </td>
        </tr>
      ))}
    </tbody>
  </Table>
  </Col>

  </Row>

  <Modal show={state.modalInsertar}
           > 
  
    <ModalHeader>
      <div>
        <h3>Insertar Registro</h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <FormGroup>
      <label>Id:</label>
      <input className='form-control' name='id' readOnly type='text' value={data.length+1} onChange={true}></input>
      </FormGroup>

      <FormGroup>
      <label>Personaje:</label>
      <input className='form-control' name='personaje' type='text' onChange={handleChange} ></input>
      </FormGroup>

      <FormGroup>
      <label>cc:</label>
      <input className='form-control' name='cc' type='text'onChange={handleChange} ></input>
      </FormGroup>

      <FormGroup>
      <label>celular:</label>
      <input className='form-control'  name='celular' type='text' onChange={handleChange} ></input>
      </FormGroup>
      
    </ModalBody>
    <ModalFooter>
      <Button variant='success' onClick={()=>insertar()}>Insertar</Button>
      <Button variant='danger' onClick={()=>ocultarModalInsertar()}>Cancelar</Button>
    </ModalFooter>
  </Modal>


  <Modal show={state.modalEditar}> 
    <ModalHeader>
      <div>
        <h3>Editar Registro</h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <FormGroup>
      <label>Id:</label>
      <input className='form-control' name='id' readOnly type='text' value={state.form.id} ></input>
      </FormGroup>

      <FormGroup>
      <label>Personaje:</label>
      <input className='form-control' name='personaje' type='text' value={state.form.personaje} onChange={handleChangeE} ></input>
      </FormGroup>

      <FormGroup>
      <label>cc:</label>
      <input className='form-control' name='cc' type='text' value={state.form.cc} onChange={handleChangeE}></input>
      </FormGroup>

      <FormGroup>
      <label>celular:</label>
      <input className='form-control'  name='celular' type='text' value={state.form.celular} onChange={handleChangeE}  ></input>
      </FormGroup>
      
    </ModalBody>
    <ModalFooter>
      <Button variant='success' onClick={()=>editar(state.form)}>Editar</Button>
      <Button variant='danger' onClick={()=>ocultarModalEditar()}>Cancelar</Button>
    </ModalFooter>
  </Modal>



  </React.Fragment>
  );


}

export default App;
