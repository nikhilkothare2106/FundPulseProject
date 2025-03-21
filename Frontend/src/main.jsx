import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import LoginInvestor from "./components/account/LoginInvestor.jsx";
import LoginStartup from "./components/account/LoginStartup.jsx";
import SignUpStartup from "./components/account/SignupStartup.jsx";
import SignUpInvestor from "./components/Account/SignupInvestor.jsx";
import Dashboard from "./components/dashboard.jsx";
import Profile from "./components/profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="startup/signup" element={<SignUpStartup />} />
      <Route path="investor/signup" element={<SignUpInvestor />} />
      <Route path="investor/login" element={<LoginInvestor />} />
      <Route path="startup/login" element={<LoginStartup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

{
  /* <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} loader={githubInfo} /> */
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
