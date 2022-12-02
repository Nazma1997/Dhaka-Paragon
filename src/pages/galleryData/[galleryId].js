import {React, useState} from 'react';
import {useRouter} from 'next/router';
import FileBase from 'react-file-base64';
import axios from 'axios';



const EditGallery = () => {

  const router = useRouter();
  const galleryId = router.query.galleryId;
  const [galleries, setGalleries]= useState({});

  const {image, title, subTitle} = galleries;

  const inputChange = e => {
        setGalleries({...galleries, [e.target.name] : e.target.value})   
  }

  

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/v1/gallery/${galleryId}`, galleries)
    
    
    router.push('/');
  }
  
  return (
    <div>
      

       <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 pt-5 my-5'>
       <h1 className='text-center mb-5'>Edit Gallery</h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="title" value={title} onChange={inputChange}/>
         <label htmlFor="floatingInput">Title</label>
       </div>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="subTitle" value={subTitle} onChange={inputChange}/>
         <label htmlFor="floatingInput">Sub Title</label>
       </div>
     
      <div className='py-2'>
      <FileBase 
               type='file'
               name='bgImage'
               value={image}
               multiple= {false}
               onChange={inputChange}
               onDone={({base64}) => setHelps({...galleries, image: base64})}
            />


      </div>
      
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>
    </div>
  )
 
  
}

export default EditGallery;