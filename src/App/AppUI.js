import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Table, Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'react-bootstrap';
import {Collapse,Navbar, NavbarToggler, NavbarBrand,Nav,NavItem,NavLink,} from 'reactstrap';
import React, { useState ,useEffect} from 'react';
import {MenuNav} from '../Inicio/Components/MenuNav/index'

function AppUI(){
    const [data, setData] = useState([]);
    const [idFetch, setidFetch]= useState()
  
  
    useEffect(()=>{
   fetch('https://django-deiby.herokuapp.com/')
      .then(response => response.json())
      .then(data => setData(data))
  }, [idFetch]);
  
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
  
    const [deleteApp, deleteDataApp] = useState();
    const [status, setStatus] = useState();
    useEffect(() => {
      fetch(`https://django-deiby.herokuapp.com/${deleteApp}`, { method: 'DELETE' })
          .then(() => setStatus('Delete successful'));
  }, [deleteApp]);
  
  const [editApp, setEditApp] = useState();
  const [editId, setEditId]= useState();
  useEffect(()=>{
    editData(editApp,editId)
  },[editApp],[editId])
  
  async function editData(datos,id) {
  fetch(`https://django-deiby.herokuapp.com/${id}`, {
    method: 'PUT',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  
  
  
  
  
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
    let valorNuevo={...state.form}
    try{
      valorNuevo.id=data[data.length-1].id+1
    }catch{
      console.log("no hay campos")
      setDataApp({personaje:'agregar otro', cc:'dato antes de', celular:'borrar este'})
      window.location.reload()
    }
    setidFetch(valorNuevo.id)
  
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
    
      setDatoId(registro.id)
  
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
  
  valorNuevo.id=data[data.length-1].id+1
  
  let nuevo=data.push(valorNuevo);
  values({
      data:nuevo,
      form:valorNuevo,
  
    } ) 
  
    console.log(valorNuevo)
    setDataApp(valorNuevo)
  }
  
  let editar=(dato)=>{
  
    let contador=0;
    let lista=data;
    
    lista.map((registro)=>{
      if(dato.id==registro.id){
        lista[contador].personaje=dato.personaje;
        lista[contador].cc=dato.cc;
        lista[contador].celular=dato.celular;
      }
      contador++;
    });
    console.log(dato)  
    values({data: lista,form:dato});
    setEditId(dato.id)
    setDatoId(dato.id)
    delete(dato.id)
    setEditApp(dato)
   
  }
  
  let eliminar=(dato)=>{
    let opcion=window.confirm("realmente desea eliminar el registro"+ dato.id);
    if(opcion){
      let contador=0;
      let lista=data;
      lista.map((registro)=>{
        if(registro.id==dato.id){
        lista.splice(contador,1);
        deleteDataApp(registro.id)
        console.log(deleteApp)
      }
        contador++;
      })
      values({data:lista, form:dato})
    }
  }
  
    const [collapsed, setCollapsed] = useState(true);
  
  
   const [datoId, setDatoId]= useState()
  
  useEffect(()=>{
  addId2(datoId)
   },[datoId])
  
   function addId2(dato){
  
      setDatoId(dato)
   }
    
    const toggleNavbar = () => setCollapsed(!collapsed);
    return(
        <React.Fragment>
          <MenuNav nombre='deiby graciano'></MenuNav>
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
        <input className='form-control' name='id' readOnly type='text' value={idFetch} onChange={true}></input>
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
        <input className='form-control' name='id' readOnly type='text' value={datoId} ></input>
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
    )
}

export {AppUI}