import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import AuthLayout from "../../layouts/AuthLayout";
import { LockIcon, EmailIcon } from "../../assets/icons";
import ButtonGoogle from "./ButtonGoogle";
import { login } from "../../services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClickLogin = async () => {
    // Validación de campos
    if (!email.trim() || !password.trim()) {
      setError("Por favor, completa todos los campos");
      return;
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("El correo electrónico ingresado no es válido");
      return;
    }

    setIsLoading(true);
    try {
      const { user, token } = await login({ email, password });
      dispatch(setUser(user));
      localStorage.setItem('token', token);
      setIsLoading(false);
      toast.success("¡Inicio de sesión exitoso!");
      navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);
      setError("Correo electrónico o contraseña incorrectos");
      toast.error("¡Inicio de sesión fallido!");
    }
  };

  return (
    <AuthLayout>
      <div className="h-full flex flex-col justify-center w-full md:w-[80%] lg:w-[60%] max-w-[480px] mx-auto">
        <header>
          <h2 className="text-3xl font-bold mb-10 text-left">Inicia sesión</h2>
        </header>
        <form className="flex flex-col gap-y-9 w-full mb-8">
          <label htmlFor="email" className="input-form-auth-container">
            <img src={EmailIcon} alt="icono de correo" className="size-7" />
            <input
              type="email"
              id="email"
              placeholder="Correo"
              className="px-2 w-full bg-transparent text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="input-form-auth-container">
            <img src={LockIcon} alt="candado icono" className="size-7" />
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className="px-2 w-full bg-transparent text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center justify-center gap-x-3">
            <a href="/" className="text-center text-primary flex-1">
              ¿Olvidaste tu contraseña?{" "}
            </a>
            <button
              type="button"
              onClick={handleClickLogin}
              className="w-full flex-1 bg-blue-500 text-white px-4 py-2 rounded-vm font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
        <ButtonGoogle text="Iniciar sesión con Google" />
        <hr className="border-t border-slate-200 my-5" />
        <footer>
          <p className="text-center text-gray-800">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-primary font-bold">
              Regístrate
            </Link>
          </p>
        </footer>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
