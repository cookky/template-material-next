// import { encode } from "base-64";

const h = () => {
  let headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });
  return headers
}

const server = {

    // api_url: 'http://178.128.18.186:8080/api',
    api_url: 'http://127.0.0.1:3333',
    // username: 'system',
    // password: '9TSurvey',
    headers: h
};

module.exports = server;