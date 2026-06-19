import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import AddDestination from "../pages/AddDestination";
import EditDestination from "../pages/EditDestination";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Favorites from "../pages/Favorites";

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/resources"
        element={<ProtectedRoute><Destinations /></ProtectedRoute>}
      />

      <Route
        path="/resources/:id"
        element={<ProtectedRoute><DestinationDetails /></ProtectedRoute>}
      />

      <Route
        path="/add-resource"
        element={<ProtectedRoute><AddDestination /></ProtectedRoute>}
      />

      <Route
        path="/edit-resource/:id"
        element={<ProtectedRoute><EditDestination /></ProtectedRoute>}
      />

      <Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/logout"
  element={<Logout />}
/>


<Route path='/favorites' element={<ProtectedRoute><Favorites/></ProtectedRoute>}/>

    </Routes>
  );
}

export default AppRoutes;