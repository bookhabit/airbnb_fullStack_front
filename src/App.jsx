import { Route, Routes } from "react-router";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import ReigsterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<ReigsterPage/>} />
      </Route>
    </Routes>
  )
}

export default App