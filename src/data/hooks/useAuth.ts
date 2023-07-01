import { useContext } from "react";
import AuthContext from "../contents/AuthContext";

export const useAuth = () => useContext(AuthContext);
