import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Snipr from "./pages/Snipr";
import AuthLayout, { AuthRedirect } from "./layouts/AuthLayout";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Snipr />} />

      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthRedirect />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
