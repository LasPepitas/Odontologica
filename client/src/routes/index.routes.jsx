import { Navigate, createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { DashboardPage, LoginPage, RegisterPage } from "../pages";
import Footer from "../components/Footer";
import TurnosPage from "../pages/Turnos/TurnosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "/", element: <Navigate to="/login" /> },
      { path: "register", element: <RegisterPage /> },
      { path: "footer", element: <Footer /> },
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      { path: "turnos", element: <TurnosPage /> }
    ],
  },
]);
