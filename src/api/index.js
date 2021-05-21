import axios from "axios";

export const login = async (username, password) => {
  const resp = await axios.post("http://localhost:3001/login", {
    username,
    password,
  });

  return resp.status === 200 ? resp.data : false;
};

export const register = async (username, password) => {
  const resp = await axios.post("http://localhost:3001/users", {
    username,
    password,
  });

  return resp.status === 201 ? resp.data : false;
};
