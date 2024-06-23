import React from 'react'
import InputBox from './InputBox'

function Name({formValues, setData, formErrors, isSubmit}) {    

  return (
    <div id='namebox' className='w-full my-2'>
    <div className='w-full flex flex-col '>
      <label    
      className='text-zinc-700 text-md my-1 mb-2 '
      htmlFor='namebox'>
          Name
      </label>
      <div className='flex justify-between gap-10 items-center w-full'>
        <InputBox 
          name='firstname' 
          label='Firstname' 
          type='text' 
          id={'firstname'} 
          value={formValues.firstname} 
          onChange={setData}
          formErrors={formErrors}
          isSubmit={isSubmit}
        />
        <InputBox
          name='middlename'
          label='Middlename' 
          type='text' 
          id={'middlename'}
          value={formValues.middlename} 
          onChange={setData}
          formErrors={formErrors}
          isSubmit={isSubmit}
        />
        <InputBox 
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
  )
}

export default Name
