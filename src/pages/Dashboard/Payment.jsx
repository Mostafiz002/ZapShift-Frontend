import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Payment = () => {
  const axiosSecure = useAxiosSecure();

  const { parcelId } = useParams();
  const { data: parcel = [], isLoading } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      parcelName: parcel.parcelName,
      parcelEmail: parcel.parcelEmail,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl mb-4">
        Pay ${parcel.cost} for {parcel.parcelName}
      </h2>

      <div className="space-y-2 text-gray-600 mb-6">
        <p><span className="font-semibold">Parcel ID:</span> {parcel._id}</p>
        <p><span className="font-semibold">Sender Email:</span> {parcel.parcelEmail}</p>
      </div>

      <button
        onClick={handlePayment}
        className="w-full btn btn-primary text-black"
      >
        Proceed to Payment
      </button>
    </div>
  </div>
  );
};

export default Payment;
