/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
import axios from "axios";
import storage from "@/utils/storage";

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url: string, options?: any) {
  const user = storage.getItem("user");
  options = options || {};
  const headers = options.headers || {};
  if (headers["content-type"] === null) delete headers["content-type"];
  else headers["Content-Type"] = headers["Content-Type"] || "application/json";

  if (user && user.token && user.token.accessToken) {
    headers.Authorization = `${user.token.tokenType} ${user.token.accessToken}`;
  }

  return axios(`${process.env.NEXT_PUBLIC_ROOT_API}/${url}`, { ...options, headers })
    .then((response) => response ? response.data : null)
    .catch(function(error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      error.response = {
        status: error.request.status,
        data: {
          code: error.request.status,
          message: errorMessage
        }
      };
      throw error;
    });
}
