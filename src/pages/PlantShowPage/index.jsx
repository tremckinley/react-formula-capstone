import NavBar from "shared-components/NavBar";

const PlantShowPage = (plant) => {
  return (
    <div>
      <NavBar />

      <div className="flex justify-center min-h-screen bg-green-50">
        <div className="w-full max-w-5xl border border-amber-600 p-4">
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <div className="flex text-4xl  text-emerald-800 justify-between w-80">
              <div>
                <div className="font-bio">Snake Plant</div>
                <div className="text-base text-stone-500 font-noto italic">yerticus maximus</div>
              </div>
              <div>$67</div>
            </div>
            
            <div className="flex flex-col items-center py-5">
              <img
                src={
                  "https://static-task-assets.react-formula.com/snake_plant_black.jpeg"
                }
                alt={`A picture of a ${plant.name}`}
                className="h-auto w-80 object-cover shadow-lg rounded-lg"
              />
              
              <div className="flex h-auto w-80 mt-5 text-stone-500 text-sm">
                <div className="flex flex-col items-center border-r border-gray-600 my-2 px-2">
                    <i className="fa-regular fa-circle-check text-green-600 text-3xl mb-2"></i>
                    <div className="text-center"><b>Gauranteed Healthy</b> <p>Guaranteed to arrive healthy or your money back</p></div>
                </div>
                <div className="flex flex-col items-center px-2">
                    <i className="fa fa-truck-fast text-green-600 text-3xl my-2"></i>
                    <div className="text-center"><b>Free Shipping</b> <p>Get free ground shipping on orders $50 or more</p></div>
                </div>
              </div>

            </div>
            <div className="text-stone-500">Add a getPlantById function to services/plant. Use this service when the PlantShowPage first mounts. You should display a loading spinner while this fetch occurs. We recommend creating a reusable LoadingSpinner component that is used on both the PlantListPage and PlantShowPage:</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantShowPage;
