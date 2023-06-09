import { Route, Routes } from "react-router";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import ReigsterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL = "http://localhost:4000"
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<ReigsterPage/>} />
          <Route path="/account" element={<AccountPage/>} />
          <Route path="/account/bookings" element={<AccountPage/>} />
          <Route path="/account/places" element={<AccountPage/>} />
          <Route path="/account/places/:action" element={<AccountPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App