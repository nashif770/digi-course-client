import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password).then((result) => {
      const user = result.user;
      navigate(from, {replace: true})
    });
  };

  return (
    <div className="hero min-h-screen w-full bg-base-200">
      <div className="hero-content w-full flex-col">
        <div className="card flex-shrink-0 w-1/3 shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center mt-3">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <p className="text-sm mb-2">
                Don't Have an Account?{" "}
                <span className="text-blue-500">
                  <Link to={"/register"}>Register</Link>
                </span>
              </p>
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
