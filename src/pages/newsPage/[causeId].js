import {useRouter} from 'next/router';
import{React, useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import axios from 'axios';


const EditCauses = () => {

  const router = useRouter();
  const causeId = router.query.causeId;
  const [causes, setCauses]= useState({});

  const {image, date, title, short, description,author} = causes;

  const inputChange = e => {
        setCauses({...causes, [e.target.name] : e.target.value})   
  }

  

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/v1/newsPage/${causeId}`, causes)
    
    
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
       <input type="text" className="form-control" id="floatingPassword" name="date" value={date}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Date</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="short" value={short}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Short Description</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="description" value={description}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Description</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="author" value={author}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Author</label>
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

export default EditCauses;
