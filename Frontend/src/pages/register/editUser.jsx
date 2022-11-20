import React,{Fragment, useState} from "react";

const EditUser = ({ all }) =>{
     const [companyName, setcompanyName]= useState(all.companyName);
     const [companyAddress, setcompanyAddress]= useState(all.companyAddress);
     const [companyEmail, setcompanyEmail]= useState(all.companyEmail);
     const [companyMobile, setcompanyMobile]= useState(all.companyMobile);
     const [ownerName, setownerName]= useState(all.ownerName);
     const [ownerContact, setownerContact]= useState(all.ownerContact);
     const [postalCode, setpostalCode]= useState(all.postalCode);
     const [tinCertificateImage, settinCertificateImage]= useState(all.tinCertificateImage);
     const [representativeName, setrepresentativeName]= useState(all.representativeName);
     const [representativeId, setrepresentativeId]= useState(all.representativeId);
        
  const updateUser = async e => {
          try{
            const body = {companyName,companyAddress,companyEmail,companyMobile,ownerName,ownerContact,postalCode,tinCertificateImage,representativeName,representativeId};
            const response = await fetch(`http://127.0.0.1:3030/api/v1/Register/update/${all.id}`,{
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            })
            console.log(body);
            window.location = "/";
        }
        catch{
            res.send(401);
        }         
  }
return(
<Fragment>
    <button type="button"
        class="btn btn-primary"
        data-bs-toggle="modal" 
        data-bs-target={`#id${all.id}`}>
        Edit
    </button>

    <div class="modal fade" id={`id${all.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Information</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Company Name
      </label>
      <input name="companyName" value={companyName} onChange={e=> setcompanyName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/ >
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input name="companyAddress" value={companyAddress} onChange={e=> setcompanyAddress(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Company Email
      </label>
      <input name="companyEmail" value={companyEmail} onChange={e=> setcompanyEmail(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/ >
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Company Mobile
      </label>
      <input name="companyMobile" value={companyMobile} onChange={e=> setcompanyMobile(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Owner Name
      </label>
      <input name="ownerName" value={ownerName} onChange={e=> setownerName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/ >
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Owner Contact
      </label>
      <input name="ownerContact" value={ownerContact} onChange={e=> setownerContact(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>

  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      Postal Code
      </label>
      <input  name="postalCode" value={postalCode} onChange={e=> setpostalCode(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
      TIN Certificate Image
      </label>
      <input name="tinCertificateImage" value={tinCertificateImage} onChange={e=> settinCertificateImage(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Representative Name
      </label>
      <input name="representativeName" value={representativeName} onChange={e=> setrepresentativeName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
      Representative Id
      </label>
      <input  name="representativeId" value={representativeId} onChange={e=> setrepresentativeId(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
      </div>
     
        <button type="button"
         class="btn btn-primary" 
         onClick = { e => updateUser(e)}
         data-bs-dismiss="modal">Save changes</button>
      </div>
  </div>
</div>
    </Fragment>
    )
}

export default EditUser;