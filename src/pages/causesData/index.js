import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';



const causesData = () => {
   const [causes, setCauses] = useState([]);


   useEffect(() => {
        loadCauses()
   },[]);


   const loadCauses = async() => {
        const result =await axios.get("http://localhost:5000/api/v1/causes");
         setCauses(result.data)
        
   }

   const deleteCauses = async(_id) => {
    await axios.delete(`http://localhost:5000/api/v1/causes/${_id}`)
    loadCauses()
   }


  return (
   <div>
      {/* <button type="button" to='/AddSlider' className="btn btn-success">Add Slider</button> */}
      <button className='btn btn-dark mx-2 my-5 text-decoration-none'> <Link href="/causesData/addCauses" className='"text-decoration-none '>Add Causes</Link></button>
      <div className='container py-5'>


     


  <table className="table border shadow border">
 <thead className='bg-dark text-white'>
   <tr>
     <th scope="col">ID</th>
     <th scope="col">Title</th>
     <th scope="col">Category</th>
     <th scope="col">Raised</th>
     <th scope="col">Goal</th>
     <th scope="col">Description</th>
     <th scope="col">Short Description</th>
     <th scope="col">Image</th>
     <th scope='col'>Actions</th>
    
   </tr>
 </thead>
 <tbody>
   

   {
     causes.map((cause, index) => (
       <tr key={cause._id}>
       <th scope="row">{index + 1}</th>
       <td>{cause.title}</td>
       <td>{cause.category}</td>
       <td>{cause.raised}</td>
       <td>{cause.goal}</td>
       <td>{cause.description}</td>
       <td>{cause.shortDescription}</td>
       <td>{cause.image}</td>
       
       <td>
    
         <button className='btn btn-dark  mx-2  my-1'><Link href={`/causesData/${cause._id}`} style={{textDecoration: 'none'}}>Edit</Link></button>
         <button className='btn btn-danger ' onClick={() => deleteCauses(cause._id)}>Delete</button>
         
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

export default causesData;
