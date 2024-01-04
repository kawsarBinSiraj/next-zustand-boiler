import { Flip } from "react-toastify";
import { v4 as uuIdv4 } from "uuid";
import _ from "lodash";

/**
 * Toast Notification
 * @param toast
 * @param type
 * @param error
 * @returns {ToastId | void | never | *|*}
 */
export const toastNotify = (toast, type, error) => {
    let message = "";
    if (!_.isUndefined(error.data) && !_.isUndefined(error.data.message)) {
        message = error.data.message;
    } else if (!_.isUndefined(error.response) && !_.isUndefined(error.response.data)) {
        message = error.response.data.message;
    } else if (_.isObject(error)) {
        message = error.message;
    } else {
        message = error;
    }

    if (type === "success") {
        return toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } else if (type === "info") {
        return toast.info(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } else if (type === "warning") {
        return toast.warn(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } else if (type === "error") {
        return toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

/**
 * Making random string
 * @param {int} limit
 * @return {string}
 */
export const makeRandomString = (limit = 8) => {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).slice(-limit);
};

/**
 * description :- nFormatter
 * created_at:- 12/12/2023 17:38:40
 */
export const nFormatter = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

/**
 * description :- getBrowserUniqueID
 * created_at:- 01/01/2024 12:42:05
 */
export const getBrowserUniqueID = () => {
    let browserUniqueID = Cookies.get("browserUniqueID");
    if (!browserUniqueID) {
        browserUniqueID = uuIdv4();
        Cookies.set("browserUniqueID", browserUniqueID);
    }
    return browserUniqueID;
};
