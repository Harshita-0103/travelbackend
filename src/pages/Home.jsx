import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1><b>🚑 Emergency Resource Management System</b></h1>

      <p>
        Find and manage emergency resources such as hospitals,
        police stations, pharmacies, and ambulance services in one place.
      </p>

 <div className="hero-buttons">
      <Link to="/resources" className="add-btn">
        Explore Resources
      </Link>

      <Link to="/add-resource" className="add-btn">
        Add Resource
      </Link>
      </div>
    </div>
  );
}

export default Home;