import Cookies from "js-cookie";

export const LIMITPAGE = 10;
export const TOKEN="token";
export const ROLE = "role";
export const EXPIRE = "expire";
export const ENDPOINT = "";

export const logOut = () =>{
    Cookies.remove(ROLE);
    Cookies.remove(TOKEN);
    Cookies.remove(EXPIRE);
}