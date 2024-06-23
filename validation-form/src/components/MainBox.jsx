// import React from 'react'
import { useEffect, useState } from 'react';
import { useValidateInput } from '../hooks/InputValidation';
import Name from './Name';
import PhoneAndEmail from './PhoneAndEmail';
import Dropdown from './Dropdown';
import InputBox from './InputBox';
import Grid from './Grid';

function MainBox({setSuccess}) { 

  const [isSubmit, setIsSubmit] = useState(false);    
  
  const initialValues = {
    firstname: '',
    middlename: '',
    surname: '',
    email: '',
    mobileNo: '',
    jobs: '',
    experience: '',    
  }

  const [formValues, setFormValues] = useState(initialValues);
  const formErrors = useValidateInput(formValues)

  const handleSubmit = (e) => {  
    setIsSubmit(true)  
    e.preventDefault();     
    if (Object.keys(formErrors).length === 0) {
      setSuccess(true)               
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

      {/* <pre>{JSON.stringify(formValues)}</pre> */}

      <form 
        onSubmit={handleSubmit}
        className=' w-full h-full'
      >
        <div className='w-full h-[calc(100vh-175px)] overflow-y-scroll px-7 scroll-px-3'>
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
            formErrors={formErrors} 
            isSubmit={isSubmit} 
            setData={setData}
          />
            
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
