"use client";
import Input from "@/app/components/inputs/input";
import { use, useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialB";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    {
      if (variant === "LOGIN") {
        setVariant("REGISTER");
      } else {
        setVariant("LOGIN");
      }
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Axios
    }
    if (variant === "LOGIN") {
      // Next Auth sign in
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
    >
      <div
        className="
            bg-white
            px-4
            py-8
            sm:rounded-lg
            sm:px-10
            "
      >
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Log in" : "Sign up"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
                            absolute
                            inset-0
                            flex
                            items-center
                            "
            >
              <div
                className="
                                w-full 
                                border-t
                                 border-gray-300"
              />
            </div>
            <div
              className="
                                relative
                                flex
                                justify-center 
                                text-sm
                                "
            >
              <span
                className="
                            bg-white px-2 text-gray-500"
              >
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={FaFacebook}
              onClick={() => socialAction("facebook")}
            />
            <AuthSocialButton
              icon={FcGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
          <div
            className="
                        flex
                        gap-2
                        justify-center
                        text-sm
                        mt-6
                        px-2
                        text-gray-500
                        "
          >
            {variant === "LOGIN" ? "New to Chatterama?" : "Already a user?"}

            <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant === "LOGIN" ? "Create an account" : "Log in"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
