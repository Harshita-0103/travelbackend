import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/users", user);
toast.success("🎉 Registration Successful!");
    setTimeout(() => { navigate("/login");
  },1500)
}

  return (
<div className='auth-container'>
<div className='auth-card'>

    <form onSubmit={handleSubmit}>
<h1>Register</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button className="btn1">
        Register
      </button>

    </form>
</div></div>
  );
}

export default Register;