import { encryptData, decryptData } from "./CryptoData";

// *********** GET USER TOKEN ***********
const getToken = () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      return decryptData(token);
    }
  } catch (err) {
    console.log(err.message);
  }
};

// const userToken = getToken();

// *********** SET USER TOKEN ***********
const setToken = (token) => {
  try {
    localStorage.setItem("token", encryptData(token));
  } catch (err) {
    console.log(err.message);
  }
};

// *********** REMOVE USER TOKEN ***********
const removeToken = () => {
  try {
    localStorage.removeItem("token");
  } catch (err) {
    console.log(err.message);
  }
};

export { setToken, getToken, removeToken };
