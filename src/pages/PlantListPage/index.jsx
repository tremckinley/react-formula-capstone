import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import PlantItem from "./PlantItem.jsx"
import SignOutRedirect from "shared-components/SignOutRedirect";
import * as plantService from "services/plant";

export default function PlantListPage() {
    const [loading, setLoading] = useState(false);
    const [plantList, setPlantList] = useState([])
    useEffect(() => {
        (async () => {
            //setLoading(true)
            const response = await plantService.getPlants();
            console.log(response.status)
            const data = await response.json();
            console.log("this is the data", data)
            setPlantList(data);
            setLoading(false)
        })()
    }, [])

    console.log("this is the list after render", plantList)
    return (
        <SignOutRedirect>
            <NavBar />
            <div className="h-full bg-green-50">
            {loading ? 
                    (<div className="pt-40 flex flex-col items-center text-emerald-600 font-bio ">
                        <i className="fa fa-sun animate-spin text-3xl"></i>
                        <div>Please Wait...</div>
                    </div>) : 
                (<div className="flex justify-center py-24">
                    <div className="w-full max-w-5xl border  border-orange-400">
                        <div className="text-4xl font-bio text-emerald-800 mb-5">Plants In Stock</div>
                        <div className="flex flex-wrap">
                           {
                            plantList.map((plant, idx) => <PlantItem key={idx} name={plant.name} price={plant.price} />)
                           } 
                        </div>
                            
                    </div>
                </div>
            )}
            </div>
        </SignOutRedirect>
    )

}