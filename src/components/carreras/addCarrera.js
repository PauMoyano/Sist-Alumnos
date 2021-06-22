import React from 'react';
import { useForm } from "react-hook-form";
//import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from 'react-redux';
//import "./addalumno.css";
//import swal from 'sweetalert';
import { Button } from 'react-bootstrap';

const AddCarrera = () => {
   const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data,e) =>{
       console.log(data)
       e.target.reset()
    } 

    return (
       <div>
           <h1>Formulario</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                   <label>Carrera:</label>
                   <input
                      className="form-add-carrera"
                      {...register("carrera",{required:{value:true, message:'Requerido'}})
                      }
                   />
                    {errors.nombre && <span className="text-danger text-small m-2">{errors.nombre.message}</span>}
               </div>
               <div>
                   <label>Plan:</label>
                   <input
                   className="form-add-carrera"
                   {...register("plan",{required:{value:true, message:'Requerido'}})
                   }
                   />
                   {errors.profesor && <span className="text-danger text-small m-2">{errors.profesor.message}</span>}
               </div>
               <Button type="submit">Cargar</Button>
           </form>
       </div>
                            
    )
};
export default AddCarrera;