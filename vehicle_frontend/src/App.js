import React, { Fragment} from "react";

import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Navbar from "./components/Navbar";
import VehicleService from "./services/VehicleService";
import VehicleList from "./components/VehicleList";

function App() {
	
    return (
      <Fragment>
		<Navbar brand="APLICACION DE VEHICULOS" />
		<BrowserRouter>
		<Routes>
			<Route path = '/' element={<VehicleList></VehicleList>}></Route>
		</Routes>
		
		</BrowserRouter>
        
      </Fragment>
    );
  }

  export default App;
