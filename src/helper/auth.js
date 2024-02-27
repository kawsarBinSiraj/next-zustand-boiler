import Cookies from "js-cookie";
import _ from "lodash";

/**
 * @method_name :- setTokenToCookie
 * @argument  :-  {access_token, token_type , expired_at}
 * ?return :-  {{}|any}
 * author :-  {{}|null}
 * created_by:- Kawsar Bin Siraj
 * created_at:- 01/01/2024 12:42:56
 * description :- A method is simply a “chunk” of code.
 */
export const setTokenToCookie = (access_token, token_type = "Bearer", expired_at) => {
    try {
        return Cookies.set("access_token", token_type + " " + access_token, {
            expires: expired_at,
        });
    } catch (err) {
        throw Error("Auth generation is failed.");
    }
};

/**
 * @method_name :- login
 * @argument  :-  {{}|any}
 * ?return :-  {{}|any}
 * author :-  {{}|null}
 * created_by:- Kawsar Bin Siraj
 * created_at:- 01/01/2024 12:43:12
 * description :- A method is simply a “chunk” of code.
 */
export const login = (callback) => {
    if (typeof callback === "function") return callback();
    window.location.href = "/" + process.env.PUBLIC_URL;
};

/**
 * @method_name :- logout
 * @argument  :-  {{}|any}
 * ?return :-  {{}|any}
 * author :-  {{}|null}
 * created_by:- Kawsar Bin Siraj
 * created_at:- 01/01/2024 12:43:33
 * description :- A method is simply a “chunk” of code.
 */
export const logout = async (callback) => {
    sessionStorage.clear();
    localStorage.clear();
    Cookies.remove("access_token");
    if (typeof callback === "function") return callback();
    window.location.href = process.env.PUBLIC_URL + "/login";
};

/**
 * @method_name :- getAccessToken
 * @argument  :-  {{}|any}
 * ?return :-  {{}|any}
 * author :-  {{}|null}
 * created_by:- Kawsar Bin Siraj
 * created_at:- 01/01/2024 12:43:41
 * description :- A method is simply a “chunk” of code.
 */
export const getAccessToken = () => {
    return Cookies.get("access_token") ?? "";
};
