"use client";

import { CircleAlert, Eye, EyeClosed, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/app/_lib/schema";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { ToastType, useAuth, useToast } from "@/app/_lib/stores";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/ui/Button";
import { postLogin } from "@/app/_lib/api";
import { useState } from "react";

export default function LoginForm() {
  const { setData } = useAuth();
  const { addMessage } = useToast();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onBlur",
  });

  const mutation = useMutation({
    mutationFn: postLogin,
    onSuccess: (response) => {
      setData(response.data);
      addMessage({
        message: "Successfully logged inn",
        duration: 10000,
        type: ToastType.SUCCESS,
      });
      router.push("/");
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
        <label htmlFor="email" className="ml-4">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          id="email"
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
            type={showPassword ? "text" : "password"}
            {...register("password")}
            id="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 pr-12 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
          />
          {/* Button to toggle password visibility */}
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-4 inset-y-0 inset-e-0 cursor-pointer text-deep-forest-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <Eye size={20} strokeWidth={2} />
            ) : (
              <EyeClosed size={20} strokeWidth={2} />
            )}
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
      <Button
        variant="large"
        color="secondary"
        width="full"
        type="submit"
        className="my-6"
      >
        Login
        <LogIn size={20} strokeWidth={2} className="ml-2 inline-block" />
      </Button>
    </form>
  );
}
