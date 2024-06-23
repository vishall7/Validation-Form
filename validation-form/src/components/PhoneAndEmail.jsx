import React from 'react'
import InputBox from './InputBox'

function PhoneAndEmail({formValues, setData, formErrors, isSubmit}) {
  return (
    <div id='mobileAndEmail' className='w-full flex justify-between items-start gap-20 my-5'>
        <div className='mobile  flex flex-col w-full'>
            <label    
                className='text-zinc-700 text-md my-1 mb-2 '
                htmlFor='mobileAndEmail'>
                    Mobile No:
            </label>
            <InputBox 
                name='mobileNo' 
                label='mobileNo' 
                type='number' 
                id={'mobileNo'}                 
                value={formValues.mobileNo} 
                onChange={setData}
                formErrors={formErrors}
                isSubmit={isSubmit}
            />
        </div>        

        <div className='email  flex flex-col w-full'>
            <label    
                className='text-zinc-700 text-md my-1 mb-2 '
                htmlFor='mobileAndEmail'>
                    Email
            </label>
            <InputBox 
                name='email' 
                label='email' 
                type='email' 
                id={'email'} 
                value={formValues.email} 
                onChange={setData}
                formErrors={formErrors}
                isSubmit={isSubmit}
            />
        </div>
    </div>
  )
}

export default PhoneAndEmail

