import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';



const CharityData = () => {
   const [charity, setCharity] = useState([]);


   useEffect(() => {
        loadCharity()
   },[]);


   const loadCharity= async() => {
        const result =await axios.get("http://localhost:5000/api/v1/charity");
         setCharity(result.data)
        
   }

   const deleteCharity = async(_id) => {
    await axios.delete(`http://localhost:5000/api/v1/charity/${_id}`)
    loadCharity()
   }


  return (
   <div>
      {/* <button type="button" to='/AddSlider' className="btn btn-success">Add Slider</button> */}
      <button className='btn btn-dark mx-2 my-5 text-decoration-none'> <Link href="/charityData/addCharity" className='"text-decoration-none '>Add Charity</Link></button>
      <div className='container py-5'>



  <table className="table border shadow border">
 <thead className='bg-dark text-white'>
   <tr>
     <th scope="col">ID</th>
     <th scope="col">Title</th>
     <th scope="col">Percentage</th>
     <th scope='col'>Image</th>
     <th scope='col'>Actions</th>
    
   </tr>
 </thead>
 <tbody>
   

   {
     charity.map((charity, index) => (
       <tr key={charity._id}>
       <th scope="row">{index + 1}</th>
       <td>{charity.title}</td>
       <td>{charity.percent}</td>
       <td>{charity.image}</td>
       
       <td>
    
         <button className='btn btn-dark  mx-2  my-1'><Link href={`/charityData/${charity._id}`} style={{textDecoration: 'none'}}>Edit</Link></button>
         <button className='btn btn-danger ' onClick={() => deleteCharity(charity._id)}>Delete</button>
         
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

export default CharityData;
