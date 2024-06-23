function Skills({ formErrors, isSubmit, setFormValues}) {   

    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          skills: prevFormValues.skills.includes(name)
            ? prevFormValues.skills.filter((skill) => skill !== name)
            : [...prevFormValues.skills, name],
        }));
    } 
    
  return (
    <div className='w-full'>
      <div className='w-full flex flex-col'>
        <label className='text-zinc-700 text-md my-1 mb-2' htmlFor='skills'>
          Additional Skills
        </label>
        <div className='flex justify-between items-center gap-3 w-full'>          
            <div className='w-3/5 border flex justify-center items-center rounded-lg p-1'>
                <label htmlFor="css" >
                <input id='css'
                 name="css"
                 type="checkbox" 
                 onChange={handleCheckboxChange}
                 /> CSS
                </label>                   
            </div>
            <div className='w-full border flex justify-center items-center rounded-lg p-1'>
                <label htmlFor="javascript" >
                <input 
                id='javascript' 
                name="javascript" 
                type="checkbox"                
                onChange={handleCheckboxChange}
                /> Javascript
                </label>                   
            </div>
            <div className='w-4/5 border flex justify-center items-center rounded-lg p-1'>
                <label htmlFor="python" >
                <input 
                id='python' 
                name="python" 
                type="checkbox"
                onChange={handleCheckboxChange} 
                /> Python
                </label>                   
            </div>  
        </div>
        {
        Object.keys(formErrors).length !== 0  && formErrors['skills'] && isSubmit   
        ? <div className='text-red-500 text-sm'>{formErrors['skills']}</div>
        : <label className='text-zinc-400 text-sm ' 
            htmlFor={'skills'}         
            >
              skills            
          </label>
      }        
      </div>
    </div>
  );
}

export default Skills;