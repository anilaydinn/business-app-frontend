import axios from "axios";

export const login = async (username, password) => {
  const resp = await axios.post(
    "http://localhost:3001/api/users/login",
    {
      username,
      password,
    },
    { withCredentials: true }
  );

  return resp.status === 200 ? true : false;
};

export const register = async (username, password) => {
  const resp = await axios.post("http://localhost:3001/api/users/register", {
    username,
    password,
  });

  return resp.status === 201 ? true : false;
};

export const isAuthenticated = async () => {
  const resp = await axios.get("http://localhost:3001/api/user", {
    withCredentials: true,
  });

  return resp.status === 200 ? resp.data : false;
};

export const logout = async () => {
  await axios.post("http://localhost:3001/api/logout", {
    withCredentials: true,
  });
};

export const getProducts = async () => {
  const resp = await axios.get("http://localhost:3001/api/products");

  return resp.status == 200 ? resp.data : false;
};

export const getProduct = async (productId) => {
  const resp = await axios.get(
    `http://localhost:3001/api/products/${productId}`
  );

  return resp.status === 200 ? resp.data : false;
};

export const sendCommentToProduct = async (productId, text) => {
  const resp = await axios.patch(
    `http://localhost:3001/api/products/${productId}/comments`,
    {
      text: text,
    }
  );

  return resp.status === 201 ? resp.data : false;
};
