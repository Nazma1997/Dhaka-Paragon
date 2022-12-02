import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';



const ThreeBoxes = () => {
   const [helps, setHelps] = useState([]);


   useEffect(() => {
        loadHelps()
   },[]);


   const loadHelps= async() => {
        const result =await axios.get("http://localhost:5000/api/v1/contract");
         setHelps(result.data)
        
   }

   const deleteHelps = async(_id) => {
    await axios.delete(`http://localhost:5000/api/v1/contract/${_id}`)
    loadHelps()
   }


  return (
   <div>
      {/* <button type="button" to='/AddSlider' className="btn btn-success">Add Slider</button> */}
      <button className='btn btn-dark mx-2 my-5 text-decoration-none'> <Link href="/contractData/addHelp" className='"text-decoration-none '>Add </Link></button>
      <div className='container py-5'>



  <table className="table border shadow border">
 <thead className='bg-dark text-white'>
   <tr>
     <th scope="col">ID</th>
     <th scope="col">Description</th>
    <th scope='col'> Tel</th>
    <th scope='col'>email</th>
    <th scope='col'>Office Address</th>
    <th colSpan='col'>Image</th>
    <th scope='col'>Actions</th>
    
   </tr>
 </thead>
 <tbody>
 
 
   {
     helps.map((help, index) => (
       <tr key={help._id}>
       <th scope="row">{index + 1}</th>
       <td>{help.description}</td>
       <td>{help.tel}</td> 
       
       <td>{help.email}</td>
       <td>{help.officeAddress}</td>
       <td>{help.image}</td>
     
       
       
       <td>
    
         <button className='btn btn-dark  mx-2  my-1'><Link href={`/contractData/${help._id}`} style={{textDecoration: 'none'}}>Edit</Link></button>
         <button className='btn btn-danger ' onClick={() => deleteHelps(help._id)}>Delete</button>
         
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
  



export default ThreeBoxes;
