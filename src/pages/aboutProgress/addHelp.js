import {React, useState} from 'react';
import {useRouter} from 'next/router';
import FileBase from 'react-file-base64';
import axios from 'axios';



const AddHelp = () => {

  const router = useRouter();
  
  const [helps, setHelps]= useState({});

  const {percentage,title,donar} = helps;

  const inputChange = e => {
        setHelps({...helps, [e.target.name] : e.target.value})   
  }

  

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/v1/progress`, helps)
    
    
    router.push('/');
  }
  
  return (
    <div>
       
       

       <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 pt-5 my-5'>
       <h1 className='text-center mb-5'>Add </h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="title" value={title} onChange={inputChange}/>
         <label htmlFor="floatingInput">Title</label>
       </div>
     
      
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="percentage" value={percentage}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Percentage</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="donar" value={donar}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Donar</label>
      </div>
     
    
      
    
      
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>
    </div>
  )
 
  
}

export default AddHelp;


