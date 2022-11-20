const Input = ({ name, label, type, onChange, value, placeholder, error }) => {
     return (
       <div className="flex flex-col mt-4 p-2">
         <label className=" uppercase" htmlFor={name}>
           {label}
         </label>
         <input
           type={type}
           id={name}
           onChange={onChange}
           value={value}
           placeholder={placeholder}
           name={name}
           class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
         />
         {error && <p className=" text-red-500 text-xs mt-2">{error}</p>}
       </div>
     );
   };
   
   export default Input;