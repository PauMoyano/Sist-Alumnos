import React, { useEffect, useState , Component} from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select';
//import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from 'react-redux';
//import "./addalumno.css";
//import swal from 'sweetalert';
import { Button } from 'react-bootstrap';

const InscripcionMateria = () => {
   //const {register, handleSubmit, watch, formState: { errors } } = useForm();
   const { register, handleSubmit, setValue, getValues, watch, formState: { errors } } = useForm();
   const [select1, setSelect1] = useState(null);
   const [select2, setSelect2] = useState(null);


   const handleChange = (
    value,
    action,
    setStateFunction,
    childSelect = null
  ) => {
    const inputRef = action.name;
    const currentValue = watch(inputRef);
    const newValue = value.value;
    if (childSelect && newValue !== currentValue) {
      setValue(childSelect, null);
      setSelect2(null);
    }
    setValue(inputRef, value);
    setStateFunction(value);
    // if(childSelect && )
  };
   const options = [
    { value: '1', label: 'Tecnicatura Superior en Desarrollo de Software' },
    { value: '2', label: 'Tecnicatura Superior en Robótica' },
  ]

  const options2 = [
    { value: '1', label: 'Primer año' },
    { value: '2', label: 'Segundo año' },
    { value: '3', label: 'tercer año' }
  ]
  const options3 = [
    { value: '1', label: 'Silvina Vildoza' },
    { value: '2', label: 'Lucas Pereyra' },
    { value: '3', label: 'Paula Moyano' }
  ]
  const options4 = [
    { value: '1', label: 'Programación III' },
    { value: '2', label: 'Nuevas técnicas de programación' },
    { value: '3', label: 'Inglés técnico III' }
  ]
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
                   <Select options={options} 
                    className="form-add-inscripcion"
                    {...register("carrera",{required:{value:true, message:'Requerido'}})
                    }
                    onChange={(value, action) => {
                        handleChange(value, action, setSelect1, "subtype");
                      }}
                    />
               </div>
               <div>
                   <label>Curso:</label>
                   <Select options={options2} 
                   className="form-add-inscripcion"
                   {...register("curso",{required:{value:true, message:'Requerido'}})
                    } 
                    onChange={(value, action) => {
                        handleChange(value, action, setSelect1, "subtype");
                      }}/>
               </div>
               <div>
                   <label>Alumno:</label>
                   <Select options={options3}
                   className="form-add-inscripcion"
                    {...register("alumno",{required:{value:true, message:'Requerido'}})
                      }
                   onChange={(value, action) => {
                        handleChange(value, action, setSelect1, "subtype");
                      }} />
               </div>
               <div>
                   <label>Materia:</label>
                   <Select options={options4} 
                   className="form-add-inscripcion"
                   {...register("materia",{required:{value:true, message:'Requerido'}})
                      }
                   onChange={(value, action) => {
                        handleChange(value, action, setSelect1, "subtype");
                      }} />
               </div>
               <Button type="submit">Cargar</Button>
           </form>
       </div>
                            
    )
};
export default InscripcionMateria;