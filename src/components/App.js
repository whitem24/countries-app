import NotFound from '../pages/NotFound';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//Pages import
/* import ShowCountry from '../pages/Countries/ShowContainer'; */
import ListCountry from '../pages/Countries/ListContainer';

const App = () =>{
	
	return(
	<Router>
		<Routes>
			{/* PUBLIC ROUTES */}
				<Route path="/countries" element={<ListCountry/>}/>
				<Route
					path="/"
					element={<Navigate to="/countries"/>}
				/>
				{/* <Route path="/countries/show/:name" element={<ShowCountry/>}/> */}
				<Route path="*" element={<NotFound/>}/>
			{/* PUBLIC ROUTES */}          
		</Routes>
	</Router>

  

)
}

export default App;
