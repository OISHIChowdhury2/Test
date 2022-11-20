import Joi from "joi-browser";
import { useState } from "react";
import formForAll from "./formForAll"
import Input from "../../pages/conponents/input";

const FirstStep = ({ nextStep, setRegistration, registration }) => {
  

  const schema = {
    companyName: Joi.string().min(4).max(20).required().label("companyName"),
    companyAddress:Joi.string().min(4).max(20).required().label("companyAddress"),
    companyEmail: Joi.string().min(4).max(20).required().label("companyEmail"),
    companyMobile :Joi.string().min(4).max(11).required().label("companyMobile"),

  };

  const signUp = {
    companyName: registration.companyName,
    companyAddress: registration.companyAddress,
    companyEmail: registration.companyEmail,
    companyMobile: registration.companyMobile,
  };

  
  const [errors, setErrors] = useState({});
  const validateLogin = () => {
    const { error } = Joi.validate(signUp, schema, { abortEarly: false });
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
    let errorData = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      errorData[input.name] = errorMessage;
    } else {
      delete errorData[input.name];
    }
    if(companyName === registration.companyName)
    {
      alert("Valid Company Name!");
    }
    let Data = { ...registration };
    Data[input.name] = input.value;
    setRegistration(Data);
    setErrors(errorData);

  };
  const handleNext = (e) => {
    const errors = validateLogin();
    setErrors({ ...errors, errors: errors || {} });
    if (errors) return;
    console.log("data is working");
    nextStep();

  };
  return (
     <div>
<section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
<h1 class="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">  
        <div> 
        <label class="text-white dark:text-gray-200">Company Name</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.companyName}
          placeholder="enter your First"
          name="companyName"
          error={errors.companyName}
        />
        </div>
          <div>
          <label class="text-white dark:text-gray-200" >Company Address</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.companyAddress}
          placeholder="enter your Lastname"
          name="companyAddress"
          error={errors.companyAddress}
        />
          </div>
          <div>
          <label class="text-white dark:text-gray-200" >Company Email</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.companyEmail}
          placeholder="enter your First"
          name="companyEmail"
          error={errors.companyEmail}
        />
        </div>       
          <div>
          <label class="text-white dark:text-gray-200">Company Number</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.companyMobile}
          placeholder="enter your Lastname"
          name="companyMobile"
          error={errors.companyMobile}
        />
          </div>
          </div>
           <div class="flex items-center justify-between">
           <div class="flex items-start">
         </div>
  
       <button onClick={handleNext} type="submit" class="w-full text-white-50 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
     </div>
     </form>
 </section>
</div>
  );
};

export default FirstStep;



