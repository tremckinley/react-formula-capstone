import apiFetch from "./apiFetch";

export const addUser = ({username, password}) => {apiFetch("POST", "/users", {username, password})};
//const signInUser = (values) => {apiFetch()}

