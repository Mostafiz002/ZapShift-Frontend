import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((s) => s.region);
  const regions = [...new Set(regionsDuplicate)];
  const riderRegion = useWatch({ control, name: "region" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((s) => s.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        toast.success("Your application has been sent");
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl text-primary">Be a Rider</h2>
      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mb-10 space-y-4"
      >
        {/* rider receiver details  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* rider  */}
          <div>
            <h3 className="text-2xl font-semibold">Sender Details</h3>
            <fieldset className="fieldset">
              {/* rider Name  */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name")}
                className="input w-full"
                readOnly
                defaultValue={user?.displayName}
                placeholder="Sender Name"
              />
              {/* rider Email  */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email")}
                defaultValue={user?.email}
                readOnly
                className="input w-full"
                placeholder="Sender Email"
              />

              {/*  rider region  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Regions</legend>
                <select
                  {...register("region")}
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

              {/*  rider districts  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">District</legend>
                <select
                  {...register("district")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(riderRegion).map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* rider address  */}
              <label className="label">Your Address</label>
              <input
                type="text"
                {...register("address")}
                className="input w-full"
                placeholder="Sender Address"
              />
            </fieldset>
          </div>
          {/* receiver  */}
          <div>
            <h3 className="text-2xl font-semibold">More Details</h3>
            <fieldset className="fieldset">
              {/* receiver Name  */}
              <label className="label">Driving License</label>
              <input
                type="text"
                {...register("license")}
                className="input w-full"
                placeholder="receiver Name"
              />
              {/* rider Email  */}
              <label className="label">NID</label>
              <input
                type="text"
                {...register("nid")}
                className="input w-full"
                placeholder="NID"
              />
              {/* receiver address  */}
              <label className="label">Bike</label>
              <input
                type="text"
                {...register("bike")}
                className="input w-full"
                placeholder="bike"
              />
            </fieldset>
          </div>
        </div>
        <input
          className="btn btn-primary text-black"
          type="submit"
          value="Apply As A Rider"
        />
      </form>
    </div>
  );
};

export default Rider;
