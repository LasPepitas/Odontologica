import { Navigate, createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { DashboardPage, LoginPage, RegisterPage } from "../pages";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandigPage from "../pages/Landing/LandigPage";
import TurnosPage from "../pages/Turnos/TurnosPage";
import ConsultasPage from "../pages/Consultas/ConsultasPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "/", element: <Navigate to="/login" /> },
      { path: "register", element: <RegisterPage /> },
      { path: "Home", element: <LandigPage /> },
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      { path: "turnos", element: <TurnosPage /> },
      { path: "consultas", element: <ConsultasPage /> },
    ],
  },
]);
