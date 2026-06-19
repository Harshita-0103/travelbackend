import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddDestination() {

 const navigate = useNavigate();

 const [formData, setFormData] = useState({
   resourceName: "",
   type: "",
   location:"",
   image: "",
   availability: ""
 });

 function handleChange(e) {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   });
 }

 async function handleSubmit(e) {
   e.preventDefault();

   await api.post(
     "/resources", formData);

   navigate("/resources");
 }

 return (
<div className='form-container'>   
<form onSubmit={handleSubmit}>

     <input
       type="text"
       name="resourceName"
       placeholder="Resource Name"
       onChange={handleChange}
     />

     <input
       type="text"
       name="type"
       placeholder="Type"
       onChange={handleChange}
     />

      <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

     <input
       type="text"
       name="image"
       placeholder="Image URL"
       onChange={handleChange}
     />

     <input
          type="text"
          name="availability"
          placeholder="Availability (24/7 etc)"
          onChange={handleChange}
        />

     <button className='submit-btn'>
       Add Resoource
     </button>

   </form>
</div>
 );
}

export default AddDestination;