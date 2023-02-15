import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Account() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  //   console.log(subpage);
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-6 ";
    if (type === subpage) {
      classes += "bg-primary text-white rounded-full";
    } else {
      classes += "bg-gray-300 rounded-full";
    }

    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <nav className="w-full justify-center flex mt-8 gap-4 mb-10">
        <Link className={linkClasses("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My Accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-sm mx-auto">
          Logged in as {user.name} - {user.email}
          <br />
          <button onClick={logout} className="primary max-w-sm mt-3">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
