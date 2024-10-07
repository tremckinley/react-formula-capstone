/* eslint-disable react/prop-types */
const PlantHeaderSection = (props) => {
    
    const {featuredPlant} = props
    
  return (
    <div className="flex text-3xl  text-emerald-800 justify-between w-80">
      <div>
        <div className="font-bio">{featuredPlant.name}</div>
        <div className="text-base text-stone-500 font-noto italic">
          {featuredPlant.botanical_name}
        </div>
      </div>
      <div>{`$${featuredPlant.price}`}</div>
    </div>
  );
};

export default PlantHeaderSection;