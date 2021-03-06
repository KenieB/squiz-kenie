const API_BASE_URL = "https://dujour.squiz.cloud/";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
//headers.append("Content-Type", "x-www-form-urlencoded");
//headers.append("Access-Control-Allow-Origin", "http://localhost:3000/");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }
    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

/**
 * Retrieve list data from API
 * @param {AbortController.signal<signal>}
 *  optional AbortController.signal
 * @returns {Promise<[data]>}
 *  a promise that resolves to a possibly empty array of list items
 */

export async function loadList(signal) {
  const url = new URL(`${API_BASE_URL}/developer-challenge/data`);
  const options = {
    mode: "cors",
    headers,
    signal,
  };
  return await fetchJson(url, options, []);
}
