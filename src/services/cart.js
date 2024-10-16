import apiFetch from "./apiFetch";


export const getCart = () => apiFetch("GET", "/cart");

export const addToCart = ({ plantID, quantity, pot_color}) => 
    apiFetch("POST", `/cart/plants/${plantID}`, { quantity, pot_color: pot_color })

export const removeFromCart = (plantID) => apiFetch("DELETE", `/cart/${plantID}`)
