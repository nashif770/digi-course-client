import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/Dashboard/StudentDashboard/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/StudentDashboard/MyEnrolledClass";
import UserDashboard from "../Pages/Dashboard/UserDashboard/UserDashboard";
import Error from "../Pages/Error/Error";
import ClassDetail from "../Pages/Classes/ClassDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "detailedClass/:id",
        element: <ClassDetail></ClassDetail>,
        loader: ({params}) =>fetch(`http://localhost:5000/classDetails/${params.id}`),
      }, 
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // User section
      {
        path: "userprofile",
        element: <UserDashboard></UserDashboard>,
      },
      // student section
      {
        path: "selectedclass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "enroll",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
    ],
  },
]);
