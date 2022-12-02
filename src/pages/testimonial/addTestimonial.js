import {React, useState} from 'react';
import {useRouter} from 'next/router';
import FileBase from 'react-file-base64';
import axios from 'axios';



const EditBox = () => {
  const router = useRouter();
  
  const [boxes, setBoxes]= useState({});

  const {description,image,name,category} = boxes;

  const inputChange = e => {
        setBoxes({...boxes, [e.target.name] : e.target.value})   
  }

  

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/v1/testimonial`, boxes)
    
    
    router.push('/');
  }
  
  return (
    <div>
       
       

       <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 pt-5 my-5'>
       <h1 className='text-center mb-5'>Add </h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="name" value={name} onChange={inputChange}/>
         <label htmlFor="floatingInput">Name</label>
       </div>
     
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="description" value={description}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Description</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="category" value={category}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Category</label>
      </div>
     
      
      <div className='py-2'>
      <FileBase 
               type='file'
               name='image'
               value={image}
               multiple= {false}
               onChange={inputChange}
               onDone={({base64}) => setBoxes({...boxes, icon: base64})}
            />


      </div>
      
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>
    </div>
  )
 
  
}

export default EditBox;


