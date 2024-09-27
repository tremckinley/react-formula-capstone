import apiFetch from "./apiFetch"; 

export const addUser = ({username, password}) => apiFetch("POST", "/users", {username, password,});

export const signInUser = ({username, password}) => apiFetch("POST", "/users/session", {username, password,});

