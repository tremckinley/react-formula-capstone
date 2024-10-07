import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "shared-components/NavBar";
import PlantInfoSection from "./PlantInfoSection";
import * as plantServices from "services/plant"
import LoadingSpinner from "shared-components/LoadingSpinner";


const PlantShowPage = () => {
  const [featuredPlant, setFeaturedPlant] = useState(null);
  const [loading, setLoading] = useState(false);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true)
      const response = await plantServices.getPlantInfo({ plantID: plantId });
      setFeaturedPlant(await response.json())
      setLoading(false)
    })()
  }, [plantId])

  if (featuredPlant == null) {
    return
  }

  return (
    <div>
      <NavBar />
      {loading ? <LoadingSpinner /> : <PlantInfoSection featuredPlant={featuredPlant} />}
        
    </div>

  );
};

export default PlantShowPage;
