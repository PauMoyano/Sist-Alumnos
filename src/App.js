import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import addAlumno from './components/alumnos/addAlumno';
import showAlumnos from './components/alumnos/showAlumnos';



function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nuevo" component={addAlumno} />
          <Route exact path="/ver" component={showAlumnos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
