import DateTime from './DateTime'
import Dropdown from './Dropdown'
import Experience from './Experience'
import PortfolioUrl from './PortfolioUrl'
import Skills from './Skills'
function Grid({formValues, setData, formErrors, isSubmit, setFormValues}) {  
  
  return (
    <div className='w-full grid grid-flow-row grid-cols-2 gap-x-20 gap-y-4 my-5'>          
          <div id='jobs' className='w-full '>          
            <Dropdown 
              formValues={formValues}           
              formErrors={formErrors} 
              isSubmit={isSubmit} 
              setData={setData}
            />          
          </div>          

          {
            formValues.jobs  && 
              <div id='experience' className='w-full '>
              <Experience 
                  formValues={formValues}           
                  formErrors={formErrors} 
                  isSubmit={isSubmit} 
                  setData={setData}
              />   
              </div>
          }
          {
            formValues.jobs === 'Designer' &&
              <div id='url' className='w-full '>
                <PortfolioUrl 
                    formValues={formValues}           
                    formErrors={formErrors} 
                    isSubmit={isSubmit} 
                    setData={setData}
                  />   
              </div>            
          }

          <div id='url' className='w-full '>
            <Skills                
                setFormValues={setFormValues}           
                formErrors={formErrors} 
                isSubmit={isSubmit}                
              />   
          </div> 

          <div id='url' className='w-full '>
            <DateTime                
                setFormValues={setFormValues}           
                formErrors={formErrors} 
                isSubmit={isSubmit}
                formValues={formValues}                
              />   
          </div>      
            
    </div>
  )
}

export default Grid

