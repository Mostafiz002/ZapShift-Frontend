import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({children}) => {
  const {  loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen">
        <h3>This route is Forbidden</h3>
      </div>
    );
  }

  return children
};

export default AdminRoute;
