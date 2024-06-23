import { useEffect, useState } from'react'

export const useValidateInput = (values) => {
    const [formErrors, setFormErrors] = useState({})
    useEffect(()=>{
        const errors = {}    
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobile = /^[0-9]{10}$/;
        if(!values.firstname.trim()){
            errors.firstname = 'Firstname is required!'
        }
        if(!values.surname.trim()){
            errors.surname = 'Lastname is required!'
        }
        if(!values.middlename.trim()){
            errors.middlename = 'Middlename is required!'
        }
        if(!values.email.trim()){
            errors.email = 'Email is required!'
        }else if(!regex.test(values.email)){
            errors.email = 'Email is invalid!'
        }
        if(!values.mobileNo.trim()){
            errors.mobileNo = 'Mobile No is required!'
        }else if(!regexMobile.test(values.mobileNo)){
            errors.mobileNo = 'Mobile No is invalid!'
        }
        if(!values.jobs.trim()){
            errors.jobs = 'Job is required!'
        }
        if (!values.experience.trim()) {
            errors.experience = 'Experience is required!'    
        }
        setFormErrors(errors)        
    },[values]) 
    return formErrors  
  }