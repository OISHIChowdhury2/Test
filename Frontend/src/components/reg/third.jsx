import Input from "../../pages/conponents/input";
import { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import formForAll from "./formForAll";

const thirtStep = ({nextStep, prevStep, setRegistration, registration }) => {
  console.log(registration);
  
   const schema = {                                     
    representativeName: Joi.string().required().min(1).label("Role"),
    representativeId:Joi.string().required().min(1).label("Role"),
    tinCertificateImage:Joi.string().required().label("photo")
  };

  const signUp3 = {
    representativeName: registration.role,
    representativeId: registration.representativeId,
    tinCertificateImage : registration.tinCertificateImage
  };

  const [errors, setErrors] = useState({});
  const validateLogin = () => {
    const { error } = Joi.validate(signUp3, schema, { abortEarly: false });
    if (!error) return null;
    const dataError = {};
    for (let item of error.details) dataError[item.path[0]] = item.message;
    return dataError;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target: input }) => {
    //const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      errorData[input.name] = errorMessage;
    } else {
      delete errorData[input.name];
    }
    let Data = { ...registration };
    Data[input.name] = input.value;
    setRegistration(Data);
    setErrors(errorData);
  };

  const handlePrevStep = () => {
    prevStep();
  };

  const register = async () =>{
    const formData = registration;
    delete formData.step;
    console.log("done");
   const {representativeId} = formData;
   if(representativeId){
    axios.post("http://127.0.0.1:3030/api/v1/Register/reg", formData)
    .then( res=>
 console.log(formData));
      //  alert("done register"));   

    }
    else{
        alert("reg fail");
    }
  }
  return (
<div>
<section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
<h1 class="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">  
        <div> 
        <label class="text-white dark:text-gray-200">Representative Name</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.representativeName}

          name="representativeName"
          error={errors.representativeName}
        />
        </div>
          <div>
          <label class="text-white dark:text-gray-200" >Representative Id</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.representativeId}

          name="representativeId"
          error={errors.representativeId}
        />
          </div>
          <div> 
        <label class="text-white dark:text-gray-200">Photo</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.tinCertificateImage}

          name="tinCertificateImage"
          error={errors.tinCertificateImage}
        />
        </div>
      
        </div>
       
        <div>
          <button
          onClick={register}
          className="bg-gray-300 hover:bg-gray-400 text-white-800 font-bold py-2 px-4 rounded-r">
            Submit
          </button> 
          </div>
       {/* <button onClick={handleNext}  type="submit" class="w-full text-white-50 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button> */}
     </form>
 </section>
</div>
  );
};

export default thirtStep;