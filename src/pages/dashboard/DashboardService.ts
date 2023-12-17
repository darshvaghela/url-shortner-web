import { URLS } from "../../constant/url";
import { IPassword } from "../../type/password";

export const generateShortener = async (url: any) => {
  try {
    let response = await fetch(URLS.GENERATE_SHORTENER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(url),
    });
    response = await response.json();
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchHashUrl = async (hashCode: any) => {
  try {
    let response = await fetch(`${URLS.GET_HASH_URL}/${hashCode}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    return response;
  } catch (error) {
    throw error;
  }
};
