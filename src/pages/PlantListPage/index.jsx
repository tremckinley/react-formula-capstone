import { useCallback, useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import PlantItem from "./PlantItem.jsx"
import SignOutRedirect from "shared-components/SignOutRedirect";
import * as plantService from "services/plant";

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

    console.log("this is the list after render", plantList)
    return (
        <SignOutRedirect>
            <NavBar />
            {/* change to extend background depending on loading h-full or h-screen */}
            <div className={"bg-green-50 " + (loading ? "h-screen" : "h-full")}>
            {loading ? 
                    (<div className="pt-40 flex flex-col items-center text-emerald-600 font-bio ">
                        <i className="fa fa-sun animate-spin text-3xl"></i>
                        <div>Please Wait...</div>
                    </div>) : 
                (<div className="flex justify-center py-24">
                    <div className="w-full max-w-5xl">
                        <div className="text-4xl font-bio text-emerald-800 mb-5">Plants In Stock</div>
                        <div className="flex flex-wrap justify-center">
                           {
                            plantList.map((plant, idx) => <PlantItem key={idx} plant={plant} />)
                           } 
                        </div>
                            
                    </div>
                </div>
            )}
            </div>
        </SignOutRedirect>
    )

}