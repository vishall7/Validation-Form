// import React from 'react'
import { useEffect, useState } from 'react'; 
import NameInput from '../Input/NameInput'
import { useValidateInput } from '../../hooks/InputValidation';

function MainBox({setSuccess}) { 

  const [isSubmit, setIsSubmit] = useState(false);    
  
  const initialValues = {
    firstname: '',
    middlename: '',
    surname: '',
    email: '',
    mobileNo: '',    
  }

  const [formValues, setFormValues] = useState(initialValues);
  const formErrors = useValidateInput(formValues)

  const handleSubmit = (e) => { 
    setIsSubmit(true)   
    e.preventDefault();     
    if (Object.keys(formErrors).length === 0 && isSubmit  ) {
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
    <div className='relative w-full h-full p-2'>      
      <form 
        onSubmit={handleSubmit}
        className=' w-full h-full px-7'>
        <div id='namebox' className='w-full'>
          <div className='w-full flex flex-col '>
            <label    
            className='text-zinc-700 text-lg my-1 mb-2 '
            htmlFor='namebox'>
                Name
            </label>
            <div className='flex justify-between gap-10 items-center w-full'>
              <NameInput 
                name='firstname' 
                label='Firstname' 
                type='text' 
                id={'firstname'} 
                value={formValues.firstname} 
                onChange={setData}
                formErrors={formErrors}
                isSubmit={isSubmit}
              />
              <NameInput
                name='middlename'
                label='Middlename' 
                type='text' 
                id={'middlename'}
                value={formValues.middlename} 
                onChange={setData}
                formErrors={formErrors}
                isSubmit={isSubmit}
              />
              <NameInput 
                name='surname' 
                label='Surname' 
                type='text' 
                id={'surname'}
                value={formValues.surname} 
                onChange={setData}
                formErrors={formErrors}
                isSubmit={isSubmit}
              />
            </div>
          </div> 
        </div>
        <div className='flex justify-center items-center w-full p-2 absolute top-[85%] left-0'>
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
