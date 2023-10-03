import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "src/schema/login-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput, CustomPasswordInput } from "../common/custom-input";
import CustomButton from "../common/custom-button";
import { AiOutlineClose } from "react-icons/ai";
import { Link, Router, useNavigate, useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [isRemember, setIsRemember] = React.useState(false);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        navigate("/");
      })}
      className=" w-[547px] px-[49px] py-[59px] flex flex-col items-center justify-center shadow-[0_2px_18px_0_rgba(0,0,0,0.1)]"
    >
      <h1 className="aitc-text uppercase text-primary text-4xl font-bold">
        Aitc
      </h1>
      <div className="w-[247px] mt-[18px] mb-[48px]">
        <p className="text-[#D1D1D1] text-center text-sm">
          Step into the world to digital assets and decentralized systems.
        </p>
      </div>
      {/* <div className="invalid-message px-2.5 flex w-full gap-[10px] items-center h-12 bg-[#F15C42] bg-opacity-20 mb-[20px] rounded-[4px]">
        <div className="w-6 h-6 rounded-full bg-[#F15C42] flex items-center justify-center">
          <AiOutlineClose fill="white" size={14} />
        </div>
        <h1 className="message ">Invalid username or email address.</h1>
      </div> */}
      <div className="flex flex-col w-full gap-[35px]">
        <CustomInput
          register={register}
          errors={errors}
          label="Username"
          type="text"
          id="username"
        />
        <CustomPasswordInput
          register={register}
          errors={errors}
          label="Password"
          type="password"
          id="password"
        />
      </div>
      <div className="forget-password-section flex items-center mt-4 w-full justify-between">
        <div className="flex  gap-1 items-center">
          <div
            onClick={() => {
              setIsRemember(!isRemember);
            }}
            className={`w-4 h-4 rounded-full cursor-pointer border ${
              isRemember && "bg-primary"
            } border-primary`}
          ></div>
          <p className="text-[#6B6B6B] text-sm">Remember me</p>
        </div>
        <Link to={"/"} className="text-primary text-opacity-75 text-sm">
          Forget Password?
        </Link>
      </div>

      <div className="w-full  mt-12">
        <CustomButton text="Login" color="bg-primary" />
      </div>
    </form>
  );
};

export default LoginForm;
