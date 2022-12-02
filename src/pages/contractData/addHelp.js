import {React, useState} from 'react';
import {useRouter} from 'next/router';
import FileBase from 'react-file-base64';
import axios from 'axios';



const AddHelp = () => {

  const router = useRouter();
  
  const [helps, setHelps]= useState({});

  const {image, description,tel,email,officeAddress} = helps;

  const inputChange = e => {
        setHelps({...helps, [e.target.name] : e.target.value})   
  }

  

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/v1/contract`, helps)
    
    
    router.push('/');
  }
  
  return (
    <div>
       
       

       <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 pt-5 my-5'>
       <h1 className='text-center mb-5'>Add </h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="Description" value={description} onChange={inputChange}/>
         <label htmlFor="floatingInput">Description</label>
       </div>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="tel" value={tel} onChange={inputChange}/>
         <label htmlFor="floatingInput">Telephone</label>
       </div>
       <div className="form-floating mb-3">
         <input type="email" className="form-control" id="floatingInput" name="email" value={email} onChange={inputChange}/>
         <label htmlFor="floatingInput">Email</label>
       </div>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="officeAddress" value={officeAddress} onChange={inputChange}/>
         <label htmlFor="floatingInput">Office Address</label>
       </div>
     
       <div className='py-2'>
      <FileBase 
               type='file'
               name='image'
               value={image}
               multiple= {false}
               onChange={inputChange}
               onDone={({base64}) => setHelps({...boxes, icon: base64})}
            />


      </div>
     
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>
    </div>
  )
 
  
}

export default AddHelp;


