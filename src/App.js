import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'react-bootstrap';
import React from 'react';

const data= [
  {id:1, personaje:"carlos acevedo", cc:103629343, celular:"3046758241"},
  {id:2, personaje:"Deiby Graciano", cc:103629344, celular:"3046758242"},
  {id:3, personaje:"Andres perez", cc:103629345, celular:"3046758243"},
  {id:4, personaje:"Luis Hincapie", cc:103629346, celular:"3046758244"},
];


function clickButon(){

}

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
    } 
  )

 
let handleChange=e=>{
  values({
    modalInsertar:true,
    form:{   
      id:data.length+1,
    ...state.form,
    [e.target.name]:e.target.value,

    }
  })
 // console.log(state)
}

const mostrarModalInsertar=()=>{
  values({modalInsertar: true})
//  console.log(state)
}
const ocultarModalInsertar=()=>{
  values({modalInsertar: false})
 // console.log(state.modalInsertar)
}

let insertar=()=>{

let valorNuevo={...state.form}
//console.log(valorNuevo)
let nuevo=data.push(valorNuevo);
values(nuevo)

}

  return (
    <React.Fragment>
   <Container>
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
         <td> <Button variant='primary'>Editar</Button></td>
         <td> <Button variant="danger">Eliminar</Button> </td>
        </tr>
      ))}
    </tbody>
  </Table>

  </Container>
  <Modal show={state.modalInsertar} > 
  
    <ModalHeader>
      <div>
        <h3>Insertar Registro</h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <FormGroup>
      <label>Id:</label>
      <input className='form-control' name='id' readOnly type='text' value={data.length+1} ></input>
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
  </React.Fragment>
  );


}

export default App;
