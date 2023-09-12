
import  { useState } from "react";


function Form({newLocation}) {
 
    const [city, setCity] = useState("") 

    const onSubmit =(e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;

        newLocation(city);

    }


  return (
    <div className="mx-auto">
        <div className="w-full flex justify-center bg-black">
            <h1 className="text-white text-4xl mx-auto m-5">Predicción Metereologica</h1>
        </div>
      <form onSubmit={onSubmit}>
        
        <div className="container-xl items-center flex justify-center">
          <div className="flex items-center">
            <span className="">Agregue su direccion</span>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-200 py-1 px-2 rounded-lg w-full"
              onChange={(e)=>setCity(e.target.value)}
            />
           <button className="ml-5 w-40 h-10 rounded-lg bg-slate-700 cursor-pointer ">lupa</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
