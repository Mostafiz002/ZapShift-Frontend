import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const SendParcel = () => {
  const { user } = useAuth();
  const { register, handleSubmit, control } = useForm();
  const serviceCenters = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const regionsDuplicate = serviceCenters.map((s) => s.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((s) => s.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleFormSubmit = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    data.cost = cost;

    Swal.fire({
      title: "Are you sure?",
      text: `Your cost is ${cost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Lets do it",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          if (res.data.insertedId) {
            navigate('/dashboard/my-parcels')
            Swal.fire({
              title: "Parcel created, Please Pay!",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h3 className="mt-10 mb-4">Send A Parcel</h3>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="mb-10 space-y-4"
      >
        {/* document */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              name="radio-1"
              {...register("parcelType")}
              className="radio"
              value="document"
              defaultChecked
            />{" "}
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              name="radio-1"
              {...register("parcelType")}
              className="radio"
              value="non-document"
            />{" "}
            Non Document
          </label>
        </div>

        {/* parcel name weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* sender receiver details  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* sender  */}
          <div>
            <h3 className="text-2xl font-semibold">Sender Details</h3>
            <fieldset className="fieldset">
              {/* sender Name  */}
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                readOnly
                defaultValue={user?.displayName}
                placeholder="Sender Name"
              />
              {/* sender Email  */}
              <label className="label">Sender Email</label>
              <input
                type="email"
                {...register("senderEmail")}
                defaultValue={user?.email}
                readOnly
                className="input w-full"
                placeholder="Sender Email"
              />

              {/*  sender region  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/*  sender districts  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender District</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(senderRegion).map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* sender address  */}
              <label className="label">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />
            </fieldset>
          </div>
          {/* receiver  */}
          <div>
            <h3 className="text-2xl font-semibold">Receiver Details</h3>
            <fieldset className="fieldset">
              {/* receiver Name  */}
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="receiver Name"
              />
              {/* sender Email  */}
              <label className="label">Receiver Email</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />

              {/*  receiver region  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/*  receiver district  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(receiverRegion).map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* receiver address  */}
              <label className="label">receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="receiver Address"
              />
            </fieldset>
          </div>
        </div>
        <input
          className="btn btn-primary text-black"
          type="submit"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
