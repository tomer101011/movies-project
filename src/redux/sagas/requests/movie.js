import axios from "axios";
import {server_path} from "../../../constants/server";

export function requestGetMovieOMDb(action) {
  const searchInput = action;
  const urlOMDb = `${server_path}/omdb`;
//   console.log(urlOMDb);
//   console.log(searchInput);
  return axios.post({
    method: "post",
    urlOMDb,
    data: {
        searchInput
    },
  });
}
