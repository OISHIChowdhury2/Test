import { useState } from "react";
import FirstStep from "../../components/reg/first";
import SecondStep from "../../components/reg/second";
import ThirtStep from "../../components/reg/third";

const signup = () => {
  const [registration, setRegistration] = useState({
    step: 1,
  companyName: "",
  representativeName:"",
  representativeId:"",
  companyAddress:"",
  companyEmail:"",
  companyMobile: "",
  ownerName:"",
  ownerContact:"",
  postalCode:"",
  tinCertificateImage :""
  });

  const handleNextStep = () => {
    let newStep = registration.step + 1;
    setRegistration({ ...registration, step: newStep });
    
  };

  const handlePrevStep = () => {
    let prevStep = registration.step - 1;
    setRegistration({ ...registration, step: prevStep });

  };
  
  switch (registration.step) {
    case 1:
      return (
        <FirstStep
          nextStep={handleNextStep}
          setRegistration={setRegistration}
          registration={registration}
        />
      );
    case 2:
      return (
        <SecondStep
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
          setRegistration={setRegistration}
          registration={registration}
        />
      );
      case 3:
        return (
          <ThirtStep

          nextStep={handleNextStep}
          prevStep={handlePrevStep}
          setRegistration={setRegistration}
          registration={registration}
          />
        );
        
  }
};

export default signup;
