import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";
import { toast } from "react-toastify";
function DestinationCard({ resource, onDelete }) {

  const dispatch = useDispatch();

  return (
    <div className="card">
      <img
        src={resource.image}
        alt={resource.resourceName}
      />

      <h3>{resource.resourceName}</h3>

      <p>{resource.type}</p>

      <p>{resource.location}</p>

      <p>⭐ {resource.availability}</p>

 <div className="card-actions">
      <Link
        className="view-btn"
        to={`/resources/${resource.id}`}
      >
        View Details
      </Link>

      <Link
        className="edit-btn"
        to={`/edit-resource/${resource.id}`}
      >
        Edit
      </Link>

      <button
        className="delete-btn"
        onClick={() => onDelete(resource.id)}
      >
        Delete
      </button>

   <button
  className="favorite-btn"
  onClick={() => {
    dispatch(addFavorite(resource));
    toast.success("❤️ Resource added to Favorites!");;
  }}
>
  Add to Fav
</button>
</div>
    </div>
  );
}

export default DestinationCard;