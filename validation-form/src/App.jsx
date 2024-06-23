import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [success, setSuccess] = useState(false); 
  const [showSummary, setShowSummary] = useState({}); 
  
  return (
    <div className="App w-full h-screen bg-blue-400 flex justify-center items-center">
      {
        success ? 
        (
          <div className="w-[60%] h-[60%] bg-white flex flex-col gap-5 justify-center items-center rounded-xl shadow-md shadow-slate-500 text-grey-400 ">
            <h1 className="text-lg text-center">Successfully Submitted </h1>
            <div>
              {showSummary && (
                <div id="summary" className="w-full h-full ">
                  <h2>Application Summary</h2>
                  <p><strong>Full Name:</strong> {showSummary.firstname} {showSummary.middlename} {showSummary.surname}</p>
                  <p><strong>Email:</strong> {showSummary.email}</p>
                  <p><strong>Phone Number:</strong> {showSummary.mobileNo}</p>
                  <p><strong>Applying for Position:</strong> {showSummary.jobs}</p>
                  <p><strong>Relevant Experience:</strong> {showSummary.experience || 'N/A'}</p>
                  <p><strong>Portfolio URL:</strong> {showSummary.portfolio || 'N/A'}</p>
                  <p><strong>Management Experience:</strong> {showSummary.experience || 'N/A'}</p>
                  <p><strong>Additional Skills:</strong> {showSummary.skills.join(', ')}</p>
                  <p><strong>Preferred Interview Time:</strong> {showSummary.DateAndTime.date} {showSummary.DateAndTime.time}</p>
                </div>
              )}
            </div>
          </div> 
        ) 
        : <Form setSuccess={setSuccess} setShowSummary={setShowSummary}/>      
      }       
    </div>
  )
}