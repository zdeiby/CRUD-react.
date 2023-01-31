import React from "react"
import { InicioUIx } from "./inicioUIx";
import Login from "../Login";
import { LoginInicio } from "./Components/IrInicio";

function Inicio(){
    const datos=localStorage.getItem('nombre')
    const [estado,setEstado]= React.useState(false)
    

    React.useEffect(()=>{
         if(datos !== 'null'){
            setEstado(true)

    } 
    },[estado])
   

    console.log(datos)
    return(
        <React.Fragment>
        {estado && (
                <InicioUIx></InicioUIx>
          )
          }
           {!estado && (
                <LoginInicio/>
                
                 
          )
          }
         
      </React.Fragment>
    )
}

export {Inicio}
