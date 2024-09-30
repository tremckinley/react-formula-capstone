import { useEffect } from "react";
import NavBar from "shared-components/NavBar";
import SignOutRedirect from "shared-components/SignOutRedirect";
import * as plantService from "services/plant";

export default function PlantListPage() {
    
    useEffect(() => {
        (async () => {
            const response = await plantService.getPlants();
            console.log(response.status)
            const plantList = await response.json()
            console.log(plantList);
        })()
    }, [])

    return (
        <SignOutRedirect>
            <NavBar />
            
        </SignOutRedirect>
    )

}