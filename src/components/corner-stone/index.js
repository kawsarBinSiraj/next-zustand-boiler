"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { logout } from "@/helper/auth";

const CornerStone = ({ children }) => {
    const router = useRouter();
    /**
     * @desc :- axios.defaults , Important: If axios is used with multiple domains,
     * the AUTH_TOKEN will be sent to all of them.
     * See below for an example using Custom instance defaults instead.
     */
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    axios.defaults.headers.common["Authorization"] = Cookies.get("access_token") || "";
    axios.defaults.headers.common["ngrok-skip-browser-warning"] = true;
    axios.interceptors.request.use(
        (config) => {
            // Do something before the request is sent (e.g., add loading indicator, auth token)
            // console.log("Request:", config); // For logging purposes (optional)
            return config;
        },
        (error) => {
            // Do something with request errors
            // console.error("Error in request:", error);
            // const { status = null } = error?.response;
            // if (status === 401) logout(() => router.push("/login"));
            if (process.env.NODE_ENV === "development") console.error("Error in request:", error);
            return Promise.reject(error);
        }
    );

    return <>{children}</>;
};

export default CornerStone;
