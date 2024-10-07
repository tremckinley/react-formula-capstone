import apiFetch from "./apiFetch";

export const getPlants = () => apiFetch("GET", "/plants");
export const getPlantInfo = ({plantID}) => apiFetch("GET",`/plants/${plantID}`)