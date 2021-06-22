import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import addAlumno from './components/alumnos/addAlumno';
import showAlumnos from './components/alumnos/showAlumnos';
import crudMaterias from './components/materias/crudMaterias';
import addMateria from './components/materias/addMateria';
import CrudCarreras from './components/carreras/crudCarreras';
import addCarrera from './components/carreras/addCarrera';
import Inscripciones from './components/inscripciones/inscripciones';


function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nuevo" component={addAlumno} />
          <Route exact path="/ver" component={showAlumnos} />
          <Route exact path="/materias" component={crudMaterias} />
          <Route exact path="/carreras" component={CrudCarreras} />
          <Route exact path="/nuevamateria" component={addMateria} />
          <Route exact path="/nuevacarrera" component={addCarrera} />
          <Route exact path="/inscripciones" component={Inscripciones} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
