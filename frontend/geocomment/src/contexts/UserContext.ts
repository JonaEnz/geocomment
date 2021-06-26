import { createContext, useContext } from "react";

export type UserCredentials = {
  email: string,
  token: string
}

export type UserContextType = {
  userCredentials: UserCredentials;
  setUserCredentials: (userCredentials: UserCredentials) => void;
};

export const UserContext = createContext<UserContextType>({
  userCredentials: {email: "", token: ""},
  setUserCredentials: (userCredentials: UserCredentials) => console.warn("no context provider"),
});

export const useUserContext = () => useContext(UserContext);
