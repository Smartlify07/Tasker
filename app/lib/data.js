// fetching data from the server happens here

const { default: axios } = require("axios");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(API_URL);

    const data = response.data;
    return data.slice(0, 2);
  } catch (error) {
    console.error(error.response);
  }
};
