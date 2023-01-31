import React from "react";
import {Menu, MenuNav} from './Components/MenuNav/index'
import {Carrousel} from './Components/Carrousel/index'
import { Cards } from './Components/Card/index'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './inicio.css'
import { Titulo } from "./Components/Titulo/index";
import { Link } from "react-router-dom";



function InicioUIx(){

    return(
  <React.Fragment>
        <MenuNav></MenuNav>
        <Carrousel></Carrousel>
        <Titulo titulo='¿Quieres aprender algo nuevo?'></Titulo>
<Row className="cards">
   <Col >
         <Cards 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
            title="Aprende JavaScript"  
            parrafo="da click en el siguiente enlace para acceder a la documentaciòn"  
            linkTitle="JS"
            anotherLinkTitle= "Developer Modzila"
            hreference='https://developer.mozilla.org/es/docs/Web/JavaScript'
            />
            </Col>

            <Col >
        <Cards 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png"
            title="Aprende Node Js"  
            parrafo="da click en el siguiente enlace para acceder a la documentaciòn"  
            linkTitle="JS"
            anotherLinkTitle= "Developer Modzila"
            hreference='https://developer.mozilla.org/es/docs/Web/JavaScript'
            />
             </Col>
             <Col >
                <Cards 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
            title="Aprende React"  
            parrafo="da click en el siguiente enlace para acceder a la documentaciòn"  
            linkTitle="JS"
            anotherLinkTitle= "Developer Modzila"
            hreference='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
            />
               
     </Col>
     </Row>
       
        </React.Fragment>
    )
}

export {InicioUIx}