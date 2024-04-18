import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../validations/userSchema";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  console.log(errors);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="bg-form flex flex-col items-center"
      >
        <h2 className="font-bold text-2xl mb-5">Login</h2>

        {/* User */}
        <div className="inputbox mb-4">
          <FaUserAlt className="icon" />
          <input
            type="text"
            id="username"
            className="mt-1 p-1 border rounded-md w-full bg-transparent"
            {...register("username")}
            autoComplete="off"
            // required
          />

          <label
            htmlFor="username"
            className="block  font-medium text-gray-900"
            autoFocus
          >
            User
          </label>
        </div>
        {errors.username?.message && (
          <p className="text-red-600 error-message">
            {errors.username?.message}
          </p>
        )}

        {/* Password */}
        <div className="inputbox mb-4">
          <FaLock className="icon" />
          <input
            type="password"
            id="password"
            className="mt-1 p-1 border rounded-md"
            {...register("password")}
            // required
          />

          <label htmlFor="password" className="block font-medium text-gray-900">
            Password
          </label>
        </div>
        {errors.password?.message && (
          <p className="text-red-600 error-message">
            {errors.password?.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-violet-700 text-white py-2 px-4 mt-5 rounded-md hover:bg-violet-900 focus:outline-none focus:ring button-form"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
