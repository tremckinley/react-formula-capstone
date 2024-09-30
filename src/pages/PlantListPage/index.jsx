import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import SignOutRedirect from "shared-components/SignOutRedirect";
import * as plantService from "services/plant";

export default function PlantListPage() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true)
            const response = await plantService.getPlants();
            console.log(response.status)
            const plantList = await response.json()
            setLoading(false)
            console.log(plantList);
        })()
    }, [])

    return (
        <SignOutRedirect>
            <NavBar />
            {loading && <div className="h-screen flex justify-center items-center"><i className="fa fa-sun animate-spin text-5xl text-emerald-500"></i></div>}
        </SignOutRedirect>
    )

}