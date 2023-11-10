import { React, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();

  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;

      const userInfo = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        role: "student",
      };
      axiosSecure.post("https://b7a12-summer-camp-server-side-nashif770.vercel.app/users", userInfo).then((res) => {
        console.log(res);
      });
      navigate("/", { replace: true });
    });
  };

  return (
    <>
      <div className="divider">OR</div>
      <button
        onClick={handleGoogle}
        className="btn btn-circle btn-outline m-auto"
      >
        G
      </button>
    </>
  );
};

export default SocialLogin;
