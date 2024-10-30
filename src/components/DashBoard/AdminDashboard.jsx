import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import Alltasks from "../others/Alltasks";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const AdminDashboard = ({data,out}) => {

  const authData = useContext(AuthContext); 
  console.log("all data",authData);
  return (
    <div className="h-screen w-full p-5">
      <Header out={out}  data={data} />
      <h2 className="text-white"> admin dashboard</h2>
      <CreateTask data={authData}  />
      <Alltasks data={authData}  />
    </div>
  );
};

export default AdminDashboard;
