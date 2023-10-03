import axios, { AxiosInstance } from "axios";

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { compareAsc, fromUnixTime } from "date-fns";
import { autoLogout } from "./auth"; 
import config from "../config";
/**
 * Checks if a given token is expired.
 *
 * @param {string} token - The token to check for expiration.
 * @returns {boolean} Returns true if the token is expired, false otherwise.
 */
export const isTokenExpired = (token: string): boolean => {
  // Decode the token and extract the `exp` claim
  const { exp } = jwtDecode<{ exp: number }>(token);
  // Convert the expiration time to a Date object
  const tokenExpirationDate = fromUnixTime(exp);

  // Get the current time
  const currentTime = new Date();

  // Compare the token expiration time with the current time
  // and return true if the token is expired, false otherwise
  return compareAsc(tokenExpirationDate, currentTime) === -1;

  // try {
  //   const { exp } = jwtDecode<{ exp: number }>(token);
  //   // Convert the expiration time to a Date object
  //   const tokenExpirationDate = fromUnixTime(exp);

  //   // Get the current time
  //   const currentTime = new Date();

  //   // Compare the token expiration time with the current time
  //   // and return true if the token is expired, false otherwise
  //   return compareAsc(tokenExpirationDate, currentTime) === -1;
  // } catch (error) {
  //   autoLogout();
  //   return false;
  // }
};

// Create a new instance of Axios with the base URL.
export const api: AxiosInstance = axios.create({
  baseURL: config.apiUrl,
});

// Set the appropriate Content-Type header based on the isForm parameter.
api.defaults.headers.post["Content-Type"] = "application/json";

// Add an interceptor to handle request headers.
api.interceptors.request.use(function (config: any) {
  if (config.headers === undefined) {
    config.headers = {};
  }
  const accessToken = Cookies.get("access");

  if (accessToken && !isTokenExpired(accessToken)) {
    // Add the Authorization header if a valid access token is available.
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  return config;
});

// Add an interceptor to handle response errors.
api.interceptors.response.use(
  // Intercept successful responses.
  async (response) => {
    return response;
  },

  // Handle errors in the response.
  async (error) => {
    if (error?.response?.status === 401) {
      autoLogout();
    }

    return Promise.reject(error?.response);
  }
);

/**
 * Creates an instance of Axios with the appropriate headers and interceptors.
 * @param isForm - A boolean indicating whether the API expects form data or JSON.
 * @returns The configured Axios instance.
 */
export const dynamicApiWithForm = (isForm?: boolean) => {
  // Create a new instance of Axios with the base URL.
  const apiWithForm: AxiosInstance = axios.create({
    baseURL: config.apiUrl,
  });

  // Set the appropriate Content-Type header based on the isForm parameter.
  apiWithForm.defaults.headers.post["Content-Type"] = isForm
    ? "multipart/form-data"
    : "application/json";

  // Add an interceptor to handle request headers.
  apiWithForm.interceptors.request.use(function (config: any) {
    if (config.headers === undefined) {
      config.headers = {};
    }
    const accessToken = Cookies.get("access");

    if (accessToken && !isTokenExpired(accessToken)) {
      // Add the Authorization header if a valid access token is available.
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  });

  // Add an interceptor to handle response errors.
  apiWithForm.interceptors.response.use(
    // Intercept successful responses.
    async (response) => {
      return response;
    },

    // Handle errors in the response.
    async (error) => {
      if (error?.response?.status === 401) {
        autoLogout();
      }

      // Uncomment the code below to handle specific error cases.

      /*
      if (error.response.status===500 || error.response.status===401) {
          autoLogout()
      }
      
      if request is made and response is received: validation error
      const {
        data: { message },
      } = error.response;

      const customErrorMessage = new GlobalErrorHandler(
        message ? message : "Sorry! There was a problem with your request.",
        HttpStatusCode.BAD_REQUEST
      );
      */

      return Promise.reject(error?.response);
    }
  );

  return apiWithForm;
};
