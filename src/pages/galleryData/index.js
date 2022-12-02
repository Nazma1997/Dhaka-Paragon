import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';



const ThreeBoxes = () => {
   const [galleries, setGalleries] = useState([]);


   useEffect(() => {
        loadGalleries()
   },[]);


   const loadGalleries= async() => {
        const result =await axios.get("http://localhost:5000/api/v1/gallery");
         setGalleries(result.data)
        
   }

   const deleteGalleries = async(_id) => {
    await axios.delete(`http://localhost:5000/api/v1/gallery/${_id}`)
    loadGalleries()
   }


  return (
   <div>
      {/* <button type="button" to='/AddSlider' className="btn btn-success">Add Slider</button> */}
      <button className='btn btn-dark mx-2 my-5 text-decoration-none'> <Link href="/galleryData/addGallery" className='"text-decoration-none '>Add Gallery</Link></button>
      <div className='container py-5'>



  <table className="table border shadow border">
 <thead className='bg-dark text-white'>
   <tr>
     <th scope="col">ID</th>
     <th scope="col">Title</th>
     <th scope="col">Sub Title</th>
     <th scope='col'>Image</th>
     <th scope='col'>Actions</th>
    
   </tr>
 </thead>
 <tbody>
 
 
   {
     galleries.map((gallery, index) => (
       <tr key={gallery._id}>
       <th scope="row">{index + 1}</th>
       <td>{gallery.title}</td>
       <td>{gallery.subTitle}</td>
       <td>{gallery.image}</td>
       
       
       <td>
    
         <button className='btn btn-dark  mx-2  my-1'><Link href={`/galleryData/${gallery._id}`} style={{textDecoration: 'none'}}>Edit</Link></button>
         <button className='btn btn-danger ' onClick={() => deleteGalleries(gallery._id)}>Delete</button>
         
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
