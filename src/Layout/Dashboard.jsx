import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import DashboardPanel from "../Pages/Dashboard/DashboardPanel/DashboardPanel";

const Dashboard = () => {
  return (
    <>
    <Navbar></Navbar>
    <DashboardPanel></DashboardPanel>
    <Footer></Footer>
    </>
  );
};

export default Dashboard;
