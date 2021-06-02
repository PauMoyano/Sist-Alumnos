import React from 'react';
import { useForm } from "react-hook-form";
//import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from 'react-redux';
import "./addalumno.css";
//import swal from 'sweetalert';
import { Button } from 'react-bootstrap';

const AddAlumno = () => {
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
                   <label>Nombres:</label>
                   <input
                      className="form-add-alumn"
                      {...register("nombres",{required:{value:true, message:'Requerido'}})
                      }
                   />
                    {errors.nombres && <span className="text-danger text-small m-2">{errors.nombres.message}</span>}
               </div>
               <div>
                   <label>Apellidos:</label>
                   <input
                   className="form-add-alumn"
                   {...register("apellidos",{required:{value:true, message:'Requerido'}})
                   }
                   />
                   {errors.apellidos && <span className="text-danger text-small m-2">{errors.apellidos.message}</span>}
               </div>
               <div>
                   <label>DNI:</label>
                   <input
                   className="form-add-alumn"
                   {...register("dni",{required:{value:true, message:'Requerido'}})
                   }
                   />
                   {errors.dni && <span className="text-danger text-small m-2">{errors.dni.message}</span>}
               </div>
               <div>
                   <label>CUIL:</label>
                   <input
                   className="form-add-alumn"
                   {...register("cuil",{required:{value:true, message:'Requerido'}})
                   }
                   />
                   {errors.cuil && <span className="text-danger text-small m-2">{errors.cuil.message}</span>}
               </div>
               <div>
                   <label>Fecha de Nac:</label>
                   <input
                   type = "date"
                   className="form-add-alumn"
                   {...register("fechaNac",{required:{value:true, message:'Requerido'}})
                   }
                   />
                   {errors.fechaNac && <span className="text-danger text-small m-2">{errors.fechaNac.message}</span>}
               </div>
               <div>
                   <label>Domicilio:</label>
                   <input
                   className="form-add-alumn"
                   {...register("domicilio",{required:{value:true, message:'Requerido'}})
                   }
                   />
                   {errors.domicilio && <span className="text-danger text-small m-2">{errors.domicilio.message}</span>}
               </div>
               <div>
                   <label>Localidad:</label>
                   <input
                   className="form-add-alumn"
                   {...register("localidad",{required:{value:true, message:'Requerido'}})
                   }
                   />
                   {errors.localidad && <span className="text-danger text-small m-2">{errors.localidad.message}</span>}
               </div>
               <div>
                   <label>Provincia:</label>
                   <input
                   className="form-add-alumn"
                   {...register("provincia",{required:{value:true, message:'Requerido'}})
                   }
                   />
                   {errors.provincia && <span className="text-danger text-small m-2">{errors.provincia.message}</span>}
               </div>
               <div>
                   <label>Teléfono:</label>
                   <input
                   type = "number"
                   className="form-add-alumn"
                   {...register("telefono",{required:{value:true, message:'Requerido'},minLength:{value:10, message:'Debe poseer al menos 10 digitos'}})
                   }
                   />
                   {errors.telefono && <span className="text-danger text-small m-2">{errors.telefono.message}</span>}
               </div>
               <div>
                   <label>Mail:</label>
                   <input
                   className="form-add-alumn"
                   {...register("mail",
                    {required:{value:true, message:'Requerido'},
                     pattern:{value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message:'Email incorrecto'}
                    }
                      )}
                   />
                   {errors.mail && <span className="text-danger text-small m-2">{errors.mail.message}</span>}
               </div>
               <Button type="submit">Cargar</Button>
           </form>
       </div>
                            
    )
};
export default AddAlumno;