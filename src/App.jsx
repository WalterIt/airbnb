import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";
import axios from "axios";
import Profile from "./pages/Profile";
import Places from "./components/Places";
import PlacesForm from "./components/form/PlacesForm";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/account/places" element={<Places />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
          <Route path="/account/:subpage/:action" element={<Profile />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
