import { Player } from "@lottiefiles/react-lottie-player";
import LoginForm from "./components/login/login-form";

const Login = () => {
  return (
    <div className="w-full h-screen flex ">
      <div className="w-[50%] bg-[#FF7500] bg-opacity-25 py-[26px] px-3.5 rounded-tr-[40%]">
        <div className="logo-wrapper w-[281px] h-20 px-2.5 flex items-center justify-center">
          <img src={"/aitclogo.png"} alt="Aitc logo" height={50} width={141} />
        </div>
        <h1 className="login-welcometext font-medium text-[22px] ml-[207px] mt-[71.5px] ">
          Welcome To <span className="text-[#FF7500]">Admin</span> Portal,
        </h1>
        <div className="player-wrapper  ">
          <Player
            autoplay
            loop
            src={"/deleteable/animation.json"}
            style={{ height: "463", width: "70%" }}
          ></Player>
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
