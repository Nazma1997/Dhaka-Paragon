import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';



const mainSliderData = () => {
   const [slider, setSlider] = useState([]);


   useEffect(() => {
        loadSlider()
   },[]);


   const loadSlider = async() => {
        const result =await axios.get("http://localhost:5000/api/v1/slider");
         setSlider(result.data)
        
   }

   const deleteSlider = async(_id) => {
    await axios.delete(`http://localhost:5000/api/v1/slider/${_id}`)
    loadSlider()
   }


  return (
   <div>
      {/* <button type="button" to='/AddSlider' className="btn btn-success">Add Slider</button> */}
      <button className='btn btn-dark mx-2 my-5 text-decoration-none'> <Link href="/mainSliderData/addSlider" className='"text-decoration-none '>Add Slider</Link></button>
      <div className='container py-5'>



  <table className="table border shadow border">
 <thead className='bg-dark text-white'>
   <tr>
     <th scope="col">ID</th>
     <th scope="col">Title</th>
     <th scope="col">Count</th>
     <th scope='col'>Action</th>
    
   </tr>
 </thead>
 <tbody>
   

   {
     slider.map((slide, index) => (
       <tr key={slide._id}>
       <th scope="row">{index + 1}</th>
       <td>{slide.title}</td>
       <td>{slide.count}</td>
       
       <td>
    
         <button className='btn btn-dark  mx-2  my-1'><Link href={`/mainSliderData/${slide._id}`} style={{textDecoration: 'none'}}>Edit</Link></button>
         <button className='btn btn-danger ' onClick={() => deleteSlider(slide._id)}>Delete</button>
         
       </td>
     </tr>
     ))
   }

 
 </tbody>
</table>
    
   </div>





   </div>
  )
}

export default mainSliderData;
