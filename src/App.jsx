import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Snipr from "./pages/Snipr";
import AuthLayout, { AuthRedirect } from "./layouts/AuthLayout";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import ServerCallForRedirect from "./components/ServerCallForRedirect";


const App = () => {
  return <BrowserRouter>
    <AuthProvider>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Snipr />} />
        <Route path="/:id" element={<ServerCallForRedirect />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<AuthRedirect />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>;
};

export default App;
