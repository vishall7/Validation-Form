import React from 'react'
import { useState } from 'react'
import Dropdown from './Dropdown'
import InputBox from './InputBox'
import Experience from './Experience'
function Grid({formValues, setData, formErrors, isSubmit}) {
  const [someMagic, setSomeMagic] = useState(false)
  const [gridColumn, setGridColumn] = useState(0)  
   
  
  
  return (
    <div className='w-full grid grid-flow-row grid-cols-2 gap-x-20 '>          
          <div id='jobs' className='w-full '>          
            <Dropdown 
              formValues={formValues}           
              formErrors={formErrors} 
              isSubmit={isSubmit} 
              setData={setData}
            />          
          </div>
          <div id='experience' className='w-full '>
          <Experience 
              formValues={formValues}           
              formErrors={formErrors} 
              isSubmit={isSubmit} 
              setData={setData}
            />   
          </div>
          <div>
              
          </div>        
            
    </div>
  )
}

export default Grid

