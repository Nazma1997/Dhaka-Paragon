import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';



const ThreeBoxes = () => {
   const [boxes, setBoxes] = useState([]);


   useEffect(() => {
        loadBoxes()
   },[]);


   const loadBoxes= async() => {
        const result =await axios.get("http://localhost:5000/api/v1/boxes");
         setBoxes(result.data)
        
   }

   const deleteBoxes = async(_id) => {
    await axios.delete(`http://localhost:5000/api/v1/boxes/${_id}`)
    loadBoxes()
   }


  return (
   <div>
      {/* <button type="button" to='/AddSlider' className="btn btn-success">Add Slider</button> */}
      <button className='btn btn-dark mx-2 my-5 text-decoration-none'> <Link href="/threeBoxes/addBox" className='"text-decoration-none '>Add Box</Link></button>
      <div className='container py-5'>



  <table className="table border shadow border">
 <thead className='bg-dark text-white'>
   <tr>
     <th scope="col">ID</th>
     <th scope="col">Title</th>
     <th scope="col">Icon</th>
     <th scope='col'>className</th>
     <th scope='col'> Description</th>
     <th scope='col'>Actions</th>
    
   </tr>
 </thead>
 <tbody>
   
 
   {
     boxes.map((box, index) => (
       <tr key={box._id}>
       <th scope="row">{index + 1}</th>
       <td>{box.title}</td>
       <td>{box.icon}</td>
       <td>{box.className}</td>
       <td>{box.description}</td>
       
       <td>
    
         <button className='btn btn-dark  mx-2  my-1'><Link href={`/threeBoxes/${box._id}`} style={{textDecoration: 'none'}}>Edit</Link></button>
         <button className='btn btn-danger ' onClick={() => deleteBoxes(box._id)}>Delete</button>
         
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
