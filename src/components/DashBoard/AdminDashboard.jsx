import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import Alltasks from "../others/Alltasks";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-5">
      <Header />
      <CreateTask />
      <Alltasks />
    </div>
  );
};

export default AdminDashboard;
