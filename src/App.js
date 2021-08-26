import React from 'react';
import Videos from './Components/Videos';
import Navbarco from './Components/Navbarco';
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';

function App() {
  return (
    <div className="Container-fluid">

      
      <div className="row mt-3">
      <Navbarco/>
        <div className="col-md-2">

         </div>
         <div className="col-md-10">
        

         <Videos/>
        

         </div>
      </div>
    </div>
  );
}

export default App;
