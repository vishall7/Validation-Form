// import React from 'react'
import { useEffect, useState } from 'react';
import { useValidateInput } from '../hooks/InputValidation';
import Name from './Name';
import PhoneAndEmail from './PhoneAndEmail';
import Grid from './Grid';
import DateTime from './DateTime';

function MainBox({setSuccess, setShowSummary}) { 

  const [isSubmit, setIsSubmit] = useState(false);    
  
  const initialValues = {
    firstname: '',
    middlename: '',
    surname: '',
    email: '',
    mobileNo: '',
    jobs: '',
    experience: '',
    url: '',
    skills: [],
    DateAndTime: {date: '', time: ''},    
  }

  const [formValues, setFormValues] = useState(initialValues);
  const formErrors = useValidateInput(formValues)

  const handleSubmit = (e) => {  
    setIsSubmit(true)  
    e.preventDefault();     
    if (Object.keys(formErrors).length === 0) {
      setSuccess(true)
      setShowSummary(formValues)
                     
    }              
  }
  const setData = (e) => {
    const {name, value} = e.target;    
    setFormValues({
      ...formValues,
      [name]: value
    })
  }  
  
  return (
    <div className='relative w-full h-full '>
      <form 
        onSubmit={handleSubmit}
        className=' w-full h-full'
      >
        <div className='w-full h-[calc(100vh-180px)] overflow-y-scroll px-7 scroll-px-3'>
          <Name 
            formValues={formValues}           
            formErrors={formErrors} 
            isSubmit={isSubmit} 
            setData={setData}
          />

          <PhoneAndEmail 
            formValues={formValues}           
            formErrors={formErrors} 
            isSubmit={isSubmit} 
            setData={setData}
          />
          
          <Grid 
            formValues={formValues}
            setFormValues={setFormValues}           
            formErrors={formErrors} 
            isSubmit={isSubmit} 
            setData={setData}
          />

          {/* <DateTime 
            formValues={formValues}
            setFormValues={setFormValues}           
            formErrors={formErrors} 
            isSubmit={isSubmit}            
          /> */}
            
        </div>

        <div className='flex justify-center items-center w-full  py-3'>
          <input 
          type="submit" 
          className='bg-blue-400 text-white text-center w-28 h-10 rounded-lg' 
          value="Submit"        
          />
        </div>
        
      </form>
             
    </div>
    
  )
}

export default MainBox
