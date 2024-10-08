import apiFetch from "./apiFetch";

export const addToCart = ({ plantID, quantity, pot_color}) => 
    apiFetch("POST", `/cart/plants/${plantID}`, { quantity, pot_color: pot_color })
