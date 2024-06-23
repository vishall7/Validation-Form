import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [success, setSuccess] = useState(false);  

  return (
    <div className="App w-full h-screen bg-blue-400 flex justify-center items-center">
      {
        success ? 
        (
          <div className="w-[30%] h-[30%] bg-white flex flex-col justify-center items-center rounded-xl shadow-md shadow-slate-500 text-grey-400 ">
            <h1 className="text-md text-center">Successfully Submitted</h1>
          </div> 
        ) 
        : <Form setSuccess={setSuccess}/>      
      }       
    </div>
  )
}