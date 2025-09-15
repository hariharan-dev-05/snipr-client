/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";

export const isVerified = async () => {
  try {
    const { data } = await axiosInstance.get("api/auth/is-verified");
    return data;
  } catch (error) {
    return false;
  }
};

export const signUp = async ({ name, email, password }) => {
  try {
    const response = await axiosInstance.post("api/auth/register", {
      name,
      email,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return response;
  } catch (error) {
    console.error("Error during sign up:", error);
    toast.error(error?.response?.data?.message || "Registration failed");
  }
};

export const logIn = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post("api/auth/login", {
      email,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return response;
  } catch (error) {
    console.error("Error during log in:", error);
    toast.error(error?.response?.data?.message || "Login failed");
  }
};

export const getUrls = () => {
  try {
    const response = axiosInstance.get("api/urls");
    return response;
  } catch (error) {
    console.error("Error fetching URLs:", error);
    toast.error(error?.response?.data?.message || "Failed to fetch URLs");
  }
};

export const createUrl = async (originalUrl) => {
  try {
    const response = await axiosInstance.post("api/snipr", { originalUrl });
    return response;
  } catch (error) {
    console.error("Error creating URL:", error);
    toast.error(error?.response?.data?.message || "Failed to create URL");
  }
};

export const deleteUrl = async (id) => {
  try {
    const response = await axiosInstance.delete(`api/urls/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting URL:", error);
    toast.error(error?.response?.data?.message || "Failed to delete URL");
  }
};
