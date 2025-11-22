import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage";
import axios from "axios";
import GoogleBtn from "../../components/GoogleBtn";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, setUser } = useAuth();

  const handleRegistration = (data) => {
    const profileImg = data.photo[0];

    createUser(data.email, data.password)
      .then(() => {
        //store the img
        const formData = new FormData();
        formData.append("image", profileImg);
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=${
              import.meta.env.VITE_image_host_key
            }`,
            formData
          )
          .then((data) => {
            //update profile
            const updateProfile = {
              displayName: data.name,
              photoURL: data.data.data.url,
            };
            updateUser(updateProfile)
              .then((res) => {
                setUser(res.user);
                toast.success("Account create successfully");
              })
              .catch((err) => {
                console.log(err);
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* name  */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.name?.type === "required" && (
            <ErrorMessage message={"Name is required"} />
          )}
          {/* Photo  */}
          <label className="label">Photo</label>

          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
          />
          {errors.photo?.type === "required" && (
            <ErrorMessage message={"File is required"} />
          )}

          {/* email  */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <ErrorMessage message={"Email is required"} />
          )}
          {/* password  */}
          <label className="label">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <ErrorMessage message={"At least 6 characters"} />
          )}
          {errors.password?.type === "pattern" && (
            <ErrorMessage
              message={
                "Password must have at least one uppercase one lowercase and one number"
              }
            />
          )}
          <button className="btn btn-neutral mt-4">Register</button>
          <div><GoogleBtn/></div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
