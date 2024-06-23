import React from 'react'
import InputBox from './InputBox'

function Experience({formValues, setData, formErrors, isSubmit}) {
    
  return (
    <div className='experince flex flex-col w-full'>
        <label    
            className='text-zinc-700 text-md my-1 mb-2 '
            htmlFor='experience'>
                {formValues.jobs === 'Designer' || formValues.jobs === 'Developer' ?                
                'Relevent Experience(in years)' 
                :'Management Experience(in years)'}
        </label>
        <InputBox 
            name='experience' 
            label='experience' 
            type='number' 
            id={'experience'} 
            style={{width: '100%'}}
            value={formValues.experience} 
            onChange={setData}
            formErrors={formErrors}
            isSubmit={isSubmit}
        />        
    </div>
  )
}

export default Experience
