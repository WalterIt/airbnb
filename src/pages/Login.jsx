import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    // console.log(email, password);
    try {
      const { data } = await axios.post("/login", { email, password });
      // alert("Login Successful!");
      setUser(data);
      // console.log(data);
      setRedirect(true);
    } catch (error) {
      alert("Login Failed!");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-6 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-4xl text-center mb-6 mt-8">Login</h1>
        <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link
              className="underline text-black font-semibold"
              to={"/register"}
            >
              {" "}
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
