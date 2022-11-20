import Input from "../../pages/conponents/input";
import { useState } from "react";
import Joi from "joi-browser";
import formForAll from "./formForAll"


const SecondStep = ({ nextStep, prevStep, setRegistration, registration}) => {

   const schema = {
    ownerName: Joi.string().required().label("ownerName"),                                      
    ownerContact: Joi.string().length(11).required().min(4).label("ownerContact"),
    postalCode:Joi.string().required().label("postalCode"), 
  };
  // // validation data
  const signUp2 = {
    ownerName: registration.ownerName ,
    ownerContact: registration.ownerContact,
    postalCode : registration.postalCode,
  };
  // handle Error
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    const { error } = Joi.validate(signUp2, schema, { abortEarly: false });
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
    let Data = { ...registration };
    Data[input.name] = input.value;
    setRegistration(Data);
    setErrors(errorData);
  };

  const secondNextStep = () => {
    const errors = validateLogin();
    setErrors({ ...errors, errors: errors || {} });
    if (errors) return;
    console.log("data is working");
    nextStep();
  };

  const handlePrevStep = () => {
    prevStep();
  };

  return (
<div>
<section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
<h1 class="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">  
        <div> 
        <label class="text-white dark:text-gray-200">Owner Name</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.ownerName}
          placeholder="enter your First"
          name="ownerName"
          error={errors.ownerName}
        />
        </div>
          <div>
          <label class="text-white dark:text-gray-200" >Owner Contact</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.ownerContact}
          placeholder="enter your Lastname"
          name="ownerContact"
          error={errors.ownerContact}
        />
          </div>
          <div>
          <label class="text-white dark:text-gray-200" >Postal Code</label>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.postalCode}
          placeholder="enter your First"
          name="postalCode"
          error={errors.postalCode}
        />
        </div>       
          <div>
          </div>
          </div>
           <div class="flex items-center justify-between">
           <div class="flex items-start">
         </div>
      
        <div className="space-x-4 mt-4">
          <button
            onClick={handlePrevStep}
            className="bg-gray-300 hover:bg-gray-400 text-white-500 font-bold py-2 px-4 rounded-r"
          >
            Prev
          </button>
          <button
            onClick={secondNextStep}
            className="bg-gray-300 hover:bg-gray-400 text-white-800 font-bold py-2 px-4 rounded-r">
            Next
          </button> 
       </div> 

</div>
       {/* <button onClick={handleNext}  type="submit" class="w-full text-white-50 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button> */}
     </form>
 </section>
</div>
  );
};

export default SecondStep;