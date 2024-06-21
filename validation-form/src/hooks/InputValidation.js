import { useEffect, useState } from'react'

export const useValidateInput = (values) => {
    const [formErrors, setFormErrors] = useState({})
    useEffect(()=>{
        const errors = {}    
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobile = /^[0-9]{10}$/;
        if(!values.firstname){
        errors.firstname = 'Firstname is required!'
        }
        if(!values.surname){
        errors.surname = 'Lastname is required!'
        }
        if(!values.middlename){
        errors.middlename = 'Middlename is required!'
        }
        setFormErrors(errors)        
    },[values]) 
    return formErrors  
  }