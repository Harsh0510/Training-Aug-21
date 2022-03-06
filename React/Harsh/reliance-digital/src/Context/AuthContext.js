import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../utils/LocalStorage";
import { getCurrentUser } from "../services/AccountService";

// *********** CONTEXT ***********
const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // *********** CURRENT USER ***********
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = getToken();
    setUserToken(token);
  }, []);

  // *********** SET CURRENT USER WHEN USER LOGGED IN ***********
  const setLoggedUSer = async () => {
    if (userToken !== "") {
      //  * GET LOGGED USER *
      const userData = await getCurrentUser();
      //  * SET LOGGED USER *
      // await setLoggedUSer(userData.data);
      setUser(userData.data);
    } else {
      setUser({});
    }
  };

  // *********** GET CURRENT USER WHEN USER LOGGED IN ***********
  useEffect(() => {
    setLoggedUSer();
  }, [userToken]);

  // *************LOG OUT **************
  // const logOut = () => {
  //   const navigate = new useNavigate();
  //   navigate("/");
  //   removeToken();
  //   setUserToken("");
  //   setUser({});
  //   console.log("hii");
  // };
  const value = {
    user,
    setUser,
    setUserToken,
    setLoggedUSer,
    // logOut,
  };
  // *********** CONTEXT PROVIDER :: provide current user to app ***********
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthContext };
