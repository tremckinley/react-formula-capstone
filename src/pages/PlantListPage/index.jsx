import { useCallback, useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import PlantItem from "./PlantItem.jsx"
import SignOutRedirect from "shared-components/SignOutRedirect";
import * as plantService from "services/plant";
import LoadingSpinner from "shared-components/LoadingSpinner.jsx";

export default function PlantListPage() {
    const [loading, setLoading] = useState(false);
    const [plantList, setPlantList] = useState([])
    
    const fetchPlants = useCallback(async () => {
        setLoading(true)
        const response = await plantService.getPlants();
        console.log(response.status)
        const data = await response.json();
        console.log("this is the data", data)
        setPlantList(data);
        setLoading(false)
    }, [])


    useEffect(() => {
        fetchPlants()
    }, [fetchPlants])

    return (
        <SignOutRedirect>
            <NavBar />
            <div className="min-h-screen bg-green-50 ">
            {loading ? 
                    <LoadingSpinner /> : 
                (<div className="flex justify-center py-24">
                    <div className="w-full max-w-5xl">
                        <div className="text-4xl font-bio text-emerald-800 mb-5 px-5">Plants In Stock</div>
                        <div className="flex flex-wrap justify-center">
                           {
                            plantList.map((plant) => <PlantItem key={plant.name} plant={plant} />)
                           } 
                        </div>
                            
                    </div>
                </div>
            )}
            </div>
        </SignOutRedirect>
    )

}