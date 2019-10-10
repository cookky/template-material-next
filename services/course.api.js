const server = require('./server.config');
import axios from "axios";


export async function findAll() {
  const response = await axios.get(`${server.api_url}/apicourse`)
  return response.data;
}

export async function findById(id) {
  const response = await axios.get(`${server.api_url}/apicourse/${id}`)
  return response.data;
}


