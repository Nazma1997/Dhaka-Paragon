import {useRouter} from 'next/router';
import{React, useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import axios from 'axios';


const EditCharity = () => {

  const router = useRouter();
  const charityId = router.query.charityId;
  const [charity, setCharity]= useState({});

  const {selectedFile,percent, title} = charity;

  const inputChange = e => {
        setCharity({...charity, [e.target.name] : e.target.value})   
  }


  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/v1/charity/${charityId}`, charity)
    
    
    router.push('/');
  }
  
  return (
    <div>
       


       <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 pt-5 my-5'>
       <h1 className='text-center mb-5'>Edit Slider</h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="percent" value={percent} onChange={inputChange}/>
         <label htmlFor="floatingInput">Percentage</label>
       </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="title" value={title}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Title</label>
      </div>
      <div className='py-2'>
      <FileBase 
               type='file'
               name='selectedFile'
               value={selectedFile}
               multiple= {false}
               onChange={inputChange}
               onDone={({base64}) => setCharity({...charity, selectedFile: base64})}
            />


      </div>
      
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>
    </div>
  )
}

export default EditCharity;
