import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="mt-6 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-4xl text-center mb-6 mt-8">Register</h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="Password" />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black font-semibold" to={"/login"}>
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
