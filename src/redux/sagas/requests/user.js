import axios from "axios";
import Cookies from "universal-cookie";
import { server_path } from "../../../constants/server";

export function requestGetManagerStatus() {
    const cookie = new Cookies();
    let userId = cookie.get("userId");
    const url = `${server_path}/login/user`;

    return axios.post(url, { userId });
}
