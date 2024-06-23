function DateTime({formValues, formErrors, isSubmit, setFormValues}) {
  const handleDateChange = (e) => {
    const {value} = e.target;
    setFormValues({
      ...formValues,
      DateAndTime: {
        ...formValues.DateAndTime,
        date: value,
      }
    });
  }

  const handleTimeChange = (e) => {
    const {value} = e.target;
    setFormValues({
      ...formValues,
      DateAndTime: {
        ...formValues.DateAndTime,
        time: value,
      }
    });
  }

  return (    

    <div id='DateAndTime' className='w-full  my-2 '>
        <div className='w-full flex flex-col '>
            <label    
            className='text-zinc-700 text-md my-1 mb-2 '
            htmlFor='DateAndTime'>
                Preferred Interview Time
            </label>
            <div className='flex justify-between gap-4 items-center w-3/5 '>
                <div className="w-full flex justify-center border rounded-lg px-2 py-1">
                    <label>Date: </label>
                    <input 
                    type="date" 
                    onChange={handleDateChange}
                     value={formValues.DateAndTime.date} 
                     className="outline-none"
                     />
                </div>
                <div className="w-full flex justify-center border rounded-lg px-2 py-1">
                    <label>Time: </label>
                    <input 
                    type="time" 
                    onChange={handleTimeChange}
                    value={formValues.DateAndTime.time} 
                    className="outline-none"
                    />
                </div>
            </div>
            {
                Object.keys(formErrors).length !== 0  && formErrors['DateAndTime'] && isSubmit   
                ? <div className='text-red-500 text-sm'>{formErrors['DateAndTime']}</div>
                : <label className='text-zinc-400 text-sm ' 
                    htmlFor={'DateAndTime'}         
                    >
                    Date and Time            
                </label>
            }
        </div>         
    </div>
  );
}

export default DateTime;