import axios from "axios";
import {server_path} from "../../../constants/server";

export function requestGetMovieOMDb(action) {
  const searchInput = action;
  const urlOMDb = `${server_path}/omdb`;

  return axios.post(urlOMDb, {search: searchInput});
}
