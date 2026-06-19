import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";
import { toast } from "react-toastify";
function Favorites() {

  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites
  );
console.log(favorites)
  return (

    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Resources
      </h1>

      {
        favorites.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No Favorite Resources
            </h2>

            <p>
              Add resources from the
              Resources page.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map(resource => (

                <div
                  className="favorite-card"
                >

                  <img
                    src={resource.image}
                    alt={resource.resourceName}
                  />

                  <div className="favorite-content">

      <h3>{resource.resourceName}</h3>

     <p>{resource.type}</p>

     <p>{resource.location}</p>

     <p>⭐ {resource.availability}</p>

                

                    <button
                      onClick={() =>{
                        dispatch(
                          removeFavorite(
                            resource.id ))
                            toast.success("Removed from Favorites 🎉");
                      }}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default Favorites;