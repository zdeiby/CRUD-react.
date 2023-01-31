import React,{ useState ,useEffect}  from "react";
import { LoginUI } from "./loginUi";
import { Inicio } from "../Inicio";


function Login(){
 
    const datos=localStorage.getItem('nombre')
    let estado;
    if(datos !== 'null'){
        estado=false
        } else {
            estado=true;
        }
    return(
        <React.Fragment>
        {estado && (
            <LoginUI></LoginUI>
      )
      }
       {!estado && (
            <Inicio/>    
          )}
        </React.Fragment>
    )
}

export default Login;
