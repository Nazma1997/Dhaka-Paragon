import {useRouter} from 'next/router';
import{React, useEffect, useState} from 'react'
import axios from 'axios';


const EditSlider = () => {

  const router = useRouter();
  const sliderId = router.query.sliderId;
  const [slider, setSlider]= useState({});

  // console.log(slider)
  

  const {count, title} = slider;

  const inputChange = e => {
        setSlider({...slider, [e.target.name] : e.target.value})   
  }


  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/v1/slider/${sliderId}`, slider)
    
    
    router.push('/');
  }
  
  return (
    <div>
       


       <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 pt-5 my-5'>
       <h1 className='text-center mb-5'>Edit Slider</h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="count" value={count} onChange={inputChange}/>
         <label htmlFor="floatingInput">Count</label>
       </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" name="title" value={title}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Title</label>
      </div>
      
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>
    </div>
  )
}

export default EditSlider
