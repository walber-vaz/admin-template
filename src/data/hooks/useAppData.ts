import { useContext } from "react";
import AppContext from "../contents/AppContext";

export const useAppData = () => useContext(AppContext);
