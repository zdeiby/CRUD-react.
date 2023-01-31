import React from 'react';
import { AppUI } from './AppUI';
import { LoginInicio } from '../Inicio/Components/IrInicio';

function App() {
  const datos=localStorage.getItem('nombre')
  let estado;
  if(datos !== 'null'){
      estado=true
      } else {
          estado=false;
      }
 
  return ( <React.Fragment>
    {estado && (
       <AppUI></AppUI>
  )
  }
   {!estado && (
        <LoginInicio/>    
      )}
    </React.Fragment>
   
  );


}

export default App;
