import React from "react";
import "../src/css/App.css";
import Nav from "../src/components/Nav";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FormPotter from './components/FormPotter';
import FormNotifier from '../src/components/FormNotifier';
import FormNovec from '../src/components/FormNovec';
import FormFirelite from '../src/components/FormFirelite';
import Inicio from '../src/components/Inicio'

function App() {
  return (
      <Router>
      <Nav />
        <Switch>
          <Route path="/formulario-potter">
            <FormPotter />
          </Route>
          <Route path="/formulario-novec">
            <FormNovec />
          </Route>
          <Route path="/formulario-firelite">
            <FormFirelite />
          </Route>
          <Route path="/formulario-notifier">
            <FormNotifier />
          </Route>
          <Route exact path="/">
            <Inicio/>
          </Route>
        </Switch>
      </Router>
      
  );
}

export default App;
