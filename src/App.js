import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "./css/sb-admin-2.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import User from "./User";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createuser from "./Createuser";
import Login from "./Login";
import Portal from "./Portal";
import Product from "./Product";
import UserView from "./UserView";
import EditUser from "./EditUser";
import { UserProvider } from "./UserContext";
import Profile from "./Profile";

function App() {

  return (
    <BrowserRouter>
          <UserProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Portal" element={<Portal/>}>
              <Route path="Dashboard" element={<Dashboard/>}/>
              <Route path="Users" element={<User/>}/>
              <Route path="Profile" element={<Profile/>}/>
              <Route path="createuser" element={<Createuser/>}/>
              <Route path="Edit/:id" element={<EditUser/>}/>
              <Route path="Product" element={<Product/>}/>
              <Route path="Users/:id" element={<UserView/>}/>
             </Route>
            </Routes>
          </UserProvider>
      
    </BrowserRouter>
  );
}

export default App;
