import http from "../http-common";

const getCountries = () => {
  return http.get(`/countries`);
};

const getVisaTypes = () => {
  return http.get(`/visatypes`);
};

const postStart = (data) => {
  return http.post("/start", data, {
    "Content-type": "application/json",
  });
};

const getQuestion = (inid) => {
  return http.get(`question?inid=${inid}`);
};

const postQuestion = (data, inid) => {
  return http.post(`question?inid=${inid}`, data);
};

const getResults = (inid) => {
  return http.get(`results?inid=${inid}`);
};

export const VisaService = {
  getCountries,
  getVisaTypes,
  postStart,
  getQuestion,
  postQuestion,
  getResults,
};
