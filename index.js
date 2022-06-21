// In this file, the BrowserRouter, Route and the Switch of react-router are imported, in addition 
// to importing the SPA pages. So we create the ReactRouterSetup function that returns some of the 
// functionality of react-router. In this case, we envelop the entire return with the {BrowserRouter} 
// functionality that in this example is imported with the name of {Router} to make it easier, at the level 
// below, we envelop all the {Route} that defines the addresses of each page, with a {Switch} wrapping them 
// all, so it only renders the first page that matches. Outside the {Switch} is only the NavBar Component , 
// as it will be rendered on all pages. The Home page has in its {Route} an exact path so that the Home is 
// not re-rendered on other pages, due to a configuration of its path. We also have the Route path='*' which 
// is any page that is not one of the ones that were defined, being then configured as an error page. And we 
// also have the Route path='/person/: id with the children <Person/> so that the targeted page is the 
// information of that particular person who has that ID.



import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
