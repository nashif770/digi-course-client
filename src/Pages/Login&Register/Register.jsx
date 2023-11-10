import React, { useContext, useState } from "react";
import { Link, matchPath, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const [matchPass, setMatchPass] = useState(true);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    const form = event.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    setMatchPass(confirmPassword === password);
  };


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!matchPass) {
      console.log("Password Don't Match");
      return;
    }

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;

      updateUser(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            role: "student",
          };
          axiosSecure
            .post("https://b7a12-summer-camp-server-side-nashif770.vercel.app/users", userInfo)
            .then((res) => {
              console.log(res);
            });
          reset();
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="hero min-h-screen w-full bg-base-200">
      <div className="hero-content w-full flex-col">
        <div className="card flex-shrink-0 w-1/3 shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center mt-3">Register now!</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body pb-0 pt-3"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photoURL", { required: true })}
                name="photoURL"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                })}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600 mb-2">
                  This field is required
                </span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span className="text-red-600">
                  Password must contain at least <br></br>1. one uppercase
                  letter, <br></br>2. one special character, <br></br>3. and be
                  at least 6 characters long.
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                })}
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600 mb-2">
                  This field is required
                </span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span className="text-red-600">
                  Password must contain at least <br></br>1. one uppercase
                  letter, <br></br>2. one special character, <br></br>3. and be
                  at least 6 characters long.
                </span>
              )}
            </div>
            <button className="btn btn-primary mt-3">Register</button>
          </form>
          <div className="p-5 pt-0 flex flex-col align-middle">
            <SocialLogin></SocialLogin>
            <p className="text-sm mt-2">
              Already Have an Account?{" "}
              <span className="text-blue-500">
                <Link to={"/login"}>Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
