import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'react-bootstrap';
import React from 'react';

const data= [
  {id:1, personaje:"carlos acevedo", cc:103629343, celular:"3046758241"},
  {id:2, personaje:"Deiby Graciano", cc:103629344, celular:"3046758242"},
  {id:3, personaje:"Andres perez", cc:103629345, celular:"3046758243"},
  {id:4, personaje:"Luis Hincapie", cc:103629346, celular:"3046758244"},
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

  return (
    <React.Fragment>
      <Row >
    <Col sm={2} className='bg-dark text-light '>
     <ul><b><h6 className='pb-2 pt-3'>Parqueadero</h6></b></ul>
     <ul>📅 <a href="#">Tablero</a></ul>
     <ul>👥 <a href="#">Usuarios</a></ul>
     <ul>📊<a href="#">Estadisticas</a></ul>
     <ul>👤 <a href="#">Perfil</a></ul>
     <ul>⚙️ <a href="#">Ajustes</a></ul>
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
