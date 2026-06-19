import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditDestination() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    resourceName: "",
    type: "",
    location: "",
    image: "",
    availability: ""
  });

  useEffect(() => {
    getResource();
  }, []);

  async function getResource() {
    try {
      const response = await api.get(`/resources/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(
        `/resources/${id}`,
        formData
      );

      navigate("/resources");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">

      <h2>Update Resource</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="resourceName"
          value={formData.resourceName}
          placeholder="Resource Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="type"
          value={formData.type}
          placeholder="Type"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleChange}
        />

        <input
          type="text"
          name="availability"
          value={formData.availability}
          placeholder="Availability"
          onChange={handleChange}
        />

        <button className="submit-btn">
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default EditDestination;