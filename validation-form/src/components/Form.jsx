import React from 'react'
import Title from './Title'
import MainBox from './MainBox'

function Form({setSuccess}) {
  return (
    <div className='w-[60%] h-[95%]  flex flex-col items-center bg-white  rounded-xl shadow-lg shadow-slate-700 text-black '>
      <Title/>
      <MainBox setSuccess={setSuccess}/>
    </div>
  )
}

export default Form
