import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function DestinationDetails() {

  const { id } = useParams();

  const [resource, setResource] = useState(null);

  useEffect(() => {
    getResource();
  }, []);

  async function getResource() {
    try {
      const response = await api.get(`/resources/${id}`);
      setResource(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!resource) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="details">

      <img
        src={resource.image}
        alt={resource.resourceName}
      />

      <h1>{resource.resourceName}</h1>

      <h3>Type</h3>
      <p>{resource.type}</p>

      <h3>Location</h3>
      <p>{resource.location}</p>

      <h3>Availability</h3>
      <p>{resource.availability}</p>

    </div>
  );
}

export default DestinationDetails;