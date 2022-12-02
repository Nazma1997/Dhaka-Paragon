import {React, useState} from 'react';
import {useRouter} from 'next/router';
import FileBase from 'react-file-base64';
import axios from 'axios';



const EditHelp = () => {

  const router = useRouter();
  const helpId = router.query.helpId;
  const [helps, setHelps]= useState({});

  const {title,description,bgImage,point} = helps;

  const inputChange = e => {
        setHelps({...helps, [e.target.name] : e.target.value})   
  }

  

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/v1/helpingOne/${helpId}`, helps)
    
    
    router.push('/');
  }
  
  return (
    <div>
       
       title,description,bgImage,point

       <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 pt-5 my-5'>
       <h1 className='text-center mb-5'>Add Helping outline</h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="title" value={title} onChange={inputChange}/>
         <label htmlFor="floatingInput">Title</label>
       </div>
     
      
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="description" value={description}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Description</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="point" value={point}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Point</label>
      </div>
    
      
      <div className='py-2'>
      <FileBase 
               type='file'
               name='bgImage'
               value={bgImage}
               multiple= {false}
               onChange={inputChange}
               onDone={({base64}) => setHelps({...helps, bgImage: base64})}
            />


      </div>
      
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>
    </div>
  )
 
  
}

export default EditHelp;


