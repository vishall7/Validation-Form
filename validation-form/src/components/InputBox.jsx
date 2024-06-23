import React from 'react'

function InputBox({name, label, type, id, value, onChange, formErrors, isSubmit, style}) {
  
  return (
    <div className="flex flex-col w-full ">              
      <input 
        id={id} 
        className='border rounded-lg outline-none h-7 p-2 py-4 text-zinc-700 text-md w-full' 
        type={type} name={name}
        value={value}
        onChange={onChange}
        style={style}  
        />
      {
        Object.keys(formErrors).length !== 0  && formErrors[name] && isSubmit   
        ? <div className='text-red-500 text-sm'>{formErrors[name]}</div>
        : <label className='text-zinc-400 text-sm ' 
            htmlFor={id}         
            >
              {label}            
          </label>
      } 
    </div>
  )
}

export default InputBox
