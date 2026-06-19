import { useEffect, useState } from "react";
import api from "../services/api";
import DestinationCard from "../components/DestinationCard";
import { toast } from "react-toastify";
function Destinations() {

  const [resources, setResources] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [availability, setAvailability] = useState("All");
const [sort, setSort] =useState("");
const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources();
  }, []);

  async function fetchResources() {
    try {
      setLoading(true);
      const response = await api.get("/resources");
      setResources(response.data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  }

  async function deleteResource(id) {
    await api.delete(`/resources/${id}`);

    setResources(
      resources.filter(resource => resource.id !== id)
    );
    toast.error("🗑️ Resource deleted!");
  }
  //filtering
 const filteredResources = resources.filter((resource) => {
    const searchMatch = resource.resourceName
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      resource.type === category;

      const availabilityMatch =
    availability === "All" ||
    resource.availability === availability;

    return searchMatch && categoryMatch&& availabilityMatch;
  });

   // Sorting
  const sortedResources = [...filteredResources];

  if (sort === "type") {
    sortedResources.sort((a, b) =>
      a.type.localeCompare(b.type)
    );
  }
if (loading) {
  return (
    <div className="loading">
       <div className="spinner"></div>
      <h2>Loading Resources...</h2>
    </div>
  );
}
if (sortedResources.length === 0) {
  return (
    <div className="no-results">
      <h2>😔 No Resources Found</h2>
      <p>Please try a different search or filter.</p>
    </div>
  );
}
  return (
    <div>

      <h1>Emergency Resources</h1>
      <div className="filters">
<input
  type="text"
  placeholder="Search Resources"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }/>

  <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Hospital">Hospital</option>
        <option value="Police Station">Police Station</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="Ambulance">Ambulance</option>
      </select>

       {/* Availability Filter */}
      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      >
        <option value="All">All Availability</option>
        <option value="24/7">24/7</option>
        <option value="Daytime">Daytime</option>
        <option value="Emergency Only">Emergency Only</option>
      </select>

 {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="type">Type (A-Z)</option>
      </select>
      </div>

      <div className="destinations">

        {sortedResources.map((resource) => (
          <DestinationCard
            key={resource.id}
            resource={resource}
            onDelete={deleteResource}
          />
        ))}
      </div>

    </div>
  );
}

export default Destinations;