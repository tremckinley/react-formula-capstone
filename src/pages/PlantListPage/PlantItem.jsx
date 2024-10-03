/* eslint-disable react/prop-types */
import { useState } from "react";
import clsx from "clsx";

const POT_COLORS = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-700",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

const PlantItem = (props) => {
  const { plant } = props;
  const imageArray = plant.images;
  const randomIndex = (array) => {
    return Math.floor(Math.random() * (array.length)) 
  };
  const [selectedImageIdx, setSelectedImageIdx] = useState(randomIndex(imageArray));

  console.log(imageArray[selectedImageIdx]["src"])

  return (
    <div className="flex flex-col items-center m-2 object-cover text-emerald-800 text-lg">
      <div className="h-64 w-72">
        <img
          className="object-cover h-full w-full shadow-lg"
          src={imageArray[selectedImageIdx]["src"]}
          alt="plant in colored pot"
        />
      </div>
      <div className="w-full flex justify-between p-1 font-bio font-semibold">
        <div>{plant.name}</div>
        <div>{`$${plant.price}`}</div>
      </div>
      <div className="flex justify-between w-full px-2">
        <div className="text-sm">{imageArray[selectedImageIdx]["pot_color"]}</div>
        <div className="flex">
          {imageArray.map((image, idx) => {
            return (
              <div key={idx} onMouseEnter={() => {
                setSelectedImageIdx(idx)
              }
              }
                className={clsx("rounded-full h-5 w-5 mx-1 border border-slate-300", POT_COLORS[image.pot_color], imageArray[selectedImageIdx]["pot_color"] == image["pot_color"] && ("outline outline-emerald-600 outline-offset-2"))
                }>

              </div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
