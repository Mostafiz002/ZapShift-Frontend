import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoMdPersonAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoPersonRemove } from "react-icons/io5";
import toast from "react-hot-toast";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure("/riders");
      return res.data;
    },
  });

  const updateRidersStatus = (rider, status) => {
    const updateInfo = { status: status,email:rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch()
        toast.success(`Rider has been ${status}`);
      }
    });
  };

  const handleApproval = (rider) => {
    updateRidersStatus(rider, "approved");
  };

  const handleReject = (rider) => {
    updateRidersStatus(rider, "rejected");
  };

  return (
    <div>
      <h2 className="text-2xl text-primary">
        Approve Riders ({riders.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, i) => (
              <tr key={rider._id}>
                <th>{i + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td>
                  {
                    <p
                      className={`${
                        rider.status === "approved"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {rider.status}
                    </p>
                  }
                </td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn rounded-full"
                  >
                    <IoMdPersonAdd />
                  </button>
                  <button
                    onClick={() => {
                      handleReject(rider);
                    }}
                    className="btn rounded-full"
                  >
                    <IoPersonRemove />
                  </button>
                  <button className="btn rounded-full">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
