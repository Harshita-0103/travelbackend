import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  async function handleSubmit(e) {
 e.preventDefault();
 try{
const response = await api.get("/users");
const foundUser = response.data.find(
      (u) =>
        u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        u.password.trim() === password.trim()
); 

    if (foundUser) {

      localStorage.setItem(
        "user",
        JSON.stringify(foundUser));
       toast.success("✅ Login Successful!");
 setTimeout(() => {
    navigate("/");
      navigate("/");
      window.location.reload();
 },1500)
    } else {

      toast.error("❌ Invalid Credentials");

    }
  }catch(error){
    console.log(error);
    toast.error("Something went wrong");
  }}

  return (
<div className='auth-container'>
<div className='auth-card'>

    <form onSubmit={handleSubmit}>
<h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button className="l1">
        Login
      </button>

    </form>
</div>
</div>
  );
}

export default Login;