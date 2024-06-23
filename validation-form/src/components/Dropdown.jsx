import React from 'react'

function Dropdown({formValues, setData, formErrors, isSubmit}) {
    
  return (
    <div id='jobs' className='w-full '>
        <div className='jobs w-full flex flex-col '>
            <label    
            className='text-zinc-700 text-md my-1 mb-2'
            htmlFor='jobs '>
                Applying for Position
            </label>
            <div className='w-full'>
                <select
                className='flex flex-col w-full border rounded-lg p-1 outline-zinc-300' 
                name="jobs"
                onChange={setData}
                value={formValues.jobs} 
                id="Jobpositions">
                    <option value="" className=''>select an option</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>        
                </select>
                {
                    formErrors['jobs'] && 
                    isSubmit && 
                    <p className='text-red-500 text-sm'>{formErrors.jobs}</p>            
                }           
            </div>
        </div> 
    </div>
  )
}

export default Dropdown
