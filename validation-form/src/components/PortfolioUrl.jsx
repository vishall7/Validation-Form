import React from 'react'
import InputBox from './InputBox'

function PortfolioUrl({formValues, setData, formErrors, isSubmit}) {    

  return (
    <div id='PortfolioUrl' className='w-full'>
    <div className='w-full flex flex-col '>
      <label    
      className='text-zinc-700 text-md my-1 mb-2 '
      htmlFor='PortfolioUrl'>
          Portfolio Url
      </label>
      <div className='flex justify-between gap-10 items-center w-full'>
        <InputBox 
          name='url'
          label='Portfolio Url' 
          type='text' 
          id={'url'} 
          value={formValues.url} 
          onChange={setData}
          formErrors={formErrors}
          isSubmit={isSubmit}
        />        
      </div>
    </div> 
    </div>
  )
}

export default PortfolioUrl
