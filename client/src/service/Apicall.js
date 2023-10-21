import axios from "axios";

const commonrequest = (methods, url, header, body) => {
  const config = {
    method: methods,
    url,
    header: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    data: body,
  };

  //axios instance
  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

export default commonrequest;
