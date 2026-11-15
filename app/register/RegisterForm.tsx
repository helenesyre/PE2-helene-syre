"use client";

import { CircleAlert, EyeClosed, UserRoundPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "../_lib/schema";
import { useMutation } from "@tanstack/react-query";
import { RegisterRequest } from "../_lib/types";
import z from "zod";
import { ToastType, useAuth, useToast } from "../_lib/stores";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const { setData } = useAuth();
  const { addMessage } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onBlur",
  });

  function postRegister(data: RegisterRequest) {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL + "auth/register";
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.username,
        email: data.email,
        password: data.password,
        venueManager: data.venueManager,
      }),
    })
      .then((res) => {
        if (res.status === 400 || res.status === 404) return null;
        if (!res.ok) {
          throw new Error(`Failed to authenticate`);
        }
        return res.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  const mutation = useMutation({
    mutationFn: postRegister,
    onSuccess: (data) => {
      setData(data);
      addMessage({
        message: "Successfully registered account",
        duration: 10000,
        type: ToastType.SUCCESS,
      });
      router.push("/login");
    },
    onError: (error) => {
      addMessage({
        message: error.message,
        duration: 10000,
        type: ToastType.ERROR,
      });
    },
  });

  return (
    <form
      className="w-full md:max-w-md"
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="username" className="ml-4">
          Username
        </label>
        <input
          type="text"
          {...register("username")}
          id="username"
          name="username"
          autoComplete="username"
          placeholder="Enter your username"
          className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
        />
        <div className="flex gap-2 ml-4">
          {errors.username?.message && (
            <CircleAlert
              size={20}
              strokeWidth={1.5}
              className="text-red-800 shrink-0"
            />
          )}
          <p className="text-red-800 small-text font-medium">
            {errors.username?.message?.toString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="email" className="ml-4">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          id="email"
          name="email"
          autoComplete="email"
          placeholder="example@stud.noroff.no"
          className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
        />
        <div className="flex gap-2 ml-4">
          {errors.email?.message && (
            <CircleAlert
              size={20}
              strokeWidth={1.5}
              className="text-red-800 shrink-0"
            />
          )}
          <p className="text-red-800 small-text font-medium">
            {errors.email?.message?.toString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="password" className="ml-4">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            {...register("password")}
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 pr-12 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
          />
          {/* Button to toggle password visibility */}
          <button
            type="button"
            aria-label="Show password"
            className="absolute right-4 inset-y-0 inset-e-0 cursor-pointer text-deep-forest-400"
          >
            <EyeClosed size={20} strokeWidth={2} />
          </button>
        </div>
        <div className="flex gap-2 ml-4">
          {errors.password?.message && (
            <CircleAlert
              size={20}
              strokeWidth={1.5}
              className="text-red-800 shrink-0"
            />
          )}
          <p className="text-red-800 small-text font-medium">
            {errors.password?.message?.toString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="confirm-password" className="ml-4">
          Confirm password
        </label>
        <div className="relative">
          <input
            type="password"
            {...register("confirmPassword")}
            id="confirm-password"
            autoComplete="current-password"
            placeholder="Confirm your password"
            className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 pr-12 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
          />
          {/* Button to toggle password visibility */}
          <button
            type="button"
            aria-label="Show password"
            className="absolute right-4 inset-y-0 inset-e-0 cursor-pointer text-deep-forest-400"
          >
            <EyeClosed size={20} strokeWidth={2} />
          </button>
        </div>
        <div className="flex gap-2 ml-4">
          {errors.confirmPassword?.message && (
            <CircleAlert
              size={20}
              strokeWidth={1.5}
              className="text-red-800 shrink-0"
            />
          )}
          <p className="text-red-800 small-text font-medium">
            {errors.confirmPassword?.message?.toString()}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start gap-2 mb-4 p-4 bg-cloud-white-50 border border-cloud-white-600 rounded-lg">
        <input
          type="checkbox"
          {...register("venueManager")}
          id="venue-manager"
          className="mt-1.5 cursor-pointer"
        />
        <div>
          <label htmlFor="venue-manager" className="cursor-pointer">
            Register user as a venue manager
          </label>
          <p className="small-text text-deep-forest-400">
            Venue managers can create venues and manage their bookings. Click
            here if you want a manager role.
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-deep-forest-500 text-cloud-white-500 button-text rounded-4xl px-4 py-2.5 my-6 cursor-pointer hover:bg-deep-forest-400 transition-all duration-300"
      >
        Create account
        <UserRoundPlus
          size={20}
          strokeWidth={2}
          className="ml-2 inline-block"
        />
      </button>
    </form>
  );
}
