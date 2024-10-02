/* eslint-disable react/prop-types */
import { useState } from "react";

const POT_COLORS = {
  stone: "text-stone-200",
  slate: "text-slate-300",
  sky: "text-sky-700",
  black: "text-gray-600",
  white: "text-gray-50",
  amber: "text-amber-600",
};

const PlantItem = (props) => {
  const { plant } = props;
  const imageArray = plant.images;
  const randomIndex = Math.floor(Math.random() * plant.images.length);
  const [selectedImage, setSelectedImage] = useState(imageArray[randomIndex]);


  return (
    <div className="flex flex-col items-center m-2 object-cover text-emerald-800 text-lg border">
      <div className="h-64 w-72">
        <img
          className="object-cover h-full w-full shadow-lg"
          src={selectedImage["src"]}
          alt="hello"
        />
      </div>
      <div className="w-full flex justify-between p-1 font-bio font-semibold">
        <div>{plant.name}</div>
        <div>{`$${plant.price}`}</div>
      </div>
      <div className="flex justify-between w-full px-2">
        <div className="text-sm">{selectedImage["pot_color"]}</div>
        <div>
          {imageArray.map((image, idx) => {
            return (
              <i key={idx} onMouseEnter={() => {
                setSelectedImage(image)
              }
              }
                className={
                  "fa-solid fa-circle mx-1 " + POT_COLORS[image.pot_color] + (selectedImage.src == image.src ? " border-2 border-emerald-600 rounded-full" : "")
                }>

              </i>)
          })}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
