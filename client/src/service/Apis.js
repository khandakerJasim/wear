import { BASE_URL } from "./Helper";
import commonrequest from "./../service/Apicall";

export const postcontactfunc = async (data, header) => {
  return await commonrequest("POST", `${BASE_URL}/api/contact`, data, header);
};
