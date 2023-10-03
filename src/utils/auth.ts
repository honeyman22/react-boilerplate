import Cookies from "js-cookie";
import { isTokenExpired } from "./axios-client";

/**
 * @description Stores token received after login into axiosclient and browser cookie
 */
export const autoLogin = (access: string) => {
  autoLogout();
  Cookies.set("access", access);
  // Cookies.set("refresh", refresh);
};

/**
 * @description Removes token from axiosclient and browser cookie
 */
export const autoLogout = () => {
  Cookies.remove("access");
  Cookies.remove("permissions");
  Cookies.remove("profile");
  // window.location.pathname = "/login";
  //   Cookies.remove("refresh");
};

export const isLoggedIn = () => {
  const access = Cookies.get("access");
  if (access) {
    if (!isTokenExpired(access)) {
      return true;
    }
  }
  return false;
};
