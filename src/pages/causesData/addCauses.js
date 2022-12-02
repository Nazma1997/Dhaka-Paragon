import {React, useState} from 'react';
import {useRouter} from 'next/router';
import FileBase from 'react-file-base64';
import axios from 'axios';



const AddCauses = () => {

  const router = useRouter();
  
  const [causes, setCauses]= useState({});

  const {image,category, title, shortDescription, description, raised, goal} = causes;

  const inputChange = e => {
        setCauses({...causes, [e.target.name] : e.target.value})   
  }

  

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/v1/causes`, causes)
    
    
    router.push('/');
  }
  
  return (
    <div>
       
       

       <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 pt-5 my-5'>
       <h1 className='text-center mb-5'>Add Causes</h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="title" value={title} onChange={inputChange}/>
         <label htmlFor="floatingInput">Title</label>
       </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="category" value={category}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Category</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="shortDescription" value={shortDescription}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Short Description</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="description" value={description}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Description</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="raised" value={raised}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Raised</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="goal" value={goal}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Goal</label>
      </div>
      
      <div className='py-2'>
      <FileBase 
               type='file'
               name='image'
               value={image}
               multiple= {false}
               onChange={inputChange}
               onDone={({base64}) => setCauses({...causes, image: base64})}
            />


      </div>
      
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>
    </div>
  )
 
  
}

export default AddCauses;


