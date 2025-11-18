import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import GoogleBtn from "../../components/GoogleBtn";

const Login = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((res) => {
        toast.success("Logged in successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-10">
      <h3 className="text-3xl">Welcome Back</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
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
            {...register("password")}
            type="password"
            className="input"
            placeholder="Password"
          />
          <button className="btn btn-neutral mt-4">Login</button>
          <div className="divider my-6">or</div>
          <GoogleBtn />
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
