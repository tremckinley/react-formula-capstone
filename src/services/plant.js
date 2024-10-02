import apiFetch from "./apiFetch";
import { useCallback } from "react";

export const getPlants = () => apiFetch("GET", "/plants");