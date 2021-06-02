import React  from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from 'react-redux';
import "./addalumno.css";
//import swal from 'sweetalert';
import { Button, Table } from 'react-bootstrap';

const ShowAlumnos = () => {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const alumnos = [["José","Lopez","22222222","11222222221","1992-02-02","Calle 123","San Miguel de Tucumán","Tucumán","3812222222","holasoyjose@gmail.com"],["Maria","Perez","33333333","11333333331","1992-02-02","Calle 123","San Miguel de Tucumán","Tucumán","3813333333","holasoymaria@gmail.com"]]
    const cabeceras = ['Nombres','Apellidos','DNI','Cuil','Fecha de Nac','Domicilio','Localidad','Provincia','Teléfono','Mail']
    
    const onSubmit = (data,e) =>{
        console.log(data)
        e.target.reset()
     } 
 
     return (
        <div>
            <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length: 12 }).map((_, index) => (
        <th key={index}>{cabeceras[index]}</th>
      ))}
    </tr>
  </thead>
  <tbody>
  {alumnos.map((alumno, index) => {
    return (
            <tr>
                <td>{index +1}</td>
                {Array.from({ length: 12 }).map((_, index) => (
                     <td key={index}>{alumno[index]}</td>
                ))}
            </tr>
            );
  })}  
  </tbody>
</Table>
        </div>
                             
     )
 };
 export default ShowAlumnos;