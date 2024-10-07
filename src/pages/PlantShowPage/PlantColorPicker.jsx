/* eslint-disable react/prop-types */
import clsx from "clsx";
import { POT_COLORS } from "services/potColors";

const PlantColorPicker = (props) => {
    const { featuredPlant, imageIdx, setImageIdx } = props
    console.log(featuredPlant)

    return (
        <div className=" flex-col w-full m-2 text-green-600">
            <div className="flex items-center">
                <i className="fa fa-fill text-2xl"></i>
                <p className="font-bold mx-2 text-emerald-800">Select Pot Color:</p>
            </div>
            <div className="flex pl-10">
                {featuredPlant.images.map((image, idx) => 
                    <div key={idx} className="mx-2 flex flex-col items-center" 
                        onMouseEnter={() => { setImageIdx(idx) }
                    }>
                        <div id={image.pot_color} key={image.pot_color} className={clsx("h-6 w-6 md:h-10 md:w-10 rounded-full", POT_COLORS[image.pot_color], imageIdx === idx && "outline outline-offset-2 outline-slate-500")}></div>
                        <label className={clsx("text-sm", imageIdx === idx ? "text-stone-700" : "text-stone-600")} htmlFor={image.pot_color}>{image.pot_color}</label>
                    </div>
                )}
            </div>
            
        </div>);
}

export default PlantColorPicker;