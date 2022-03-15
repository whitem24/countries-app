import NotFound from '../pages/NotFound';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
//Pages import
import ShowCountry from '../pages/Countries/ShowContainer';
import ListCountry from '../pages/Countries/ListContainer';

const App = () =>{
	
	return(
	<Router>
		<Switch>
			{/* PUBLIC ROUTES */}
				{/* <Route path="countries" element={<ListCountry/>}/> */}
				<Route exact path="/" component = {ListCountry}>
							<Redirect to={"/countries"}/> 
						
				</Route>
				<Route exact path="/countries" component={ListCountry}/>
				<Route exact path="/countries/show/:name" component={ShowCountry}/>		
				
				<Route component={NotFound}/>
			{/* PUBLIC ROUTES */}          
		</Switch>
	</Router>

  

)
}

export default App;
