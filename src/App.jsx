import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";
import axios from "axios";
import Account from "./pages/Account";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
<<<<<<< HEAD
  return <div className="bg-red-500">Test</div>;
=======
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:subpage?" element={<Account />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
>>>>>>> 03_Account_page
}

export default App;
