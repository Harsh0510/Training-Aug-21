import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/LocalStorage";
import { useAuthContext } from "../Context/AuthContext";

const LogOut = () => {
  const navigate = new useNavigate();
  const { setUserToken, setUser } = useAuthContext();
  useEffect(() => {
    removeToken();
    setUserToken("");
    setUser({});
    navigate("/");
  }, [navigate]);

  return <></>;
};

export default LogOut;
