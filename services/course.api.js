const server = require('./server.config');
import axios from "axios";


export async function findAll() {
  const response = await axios.get(`${server.api_url}/apicourse`)

  return response.data;
}


