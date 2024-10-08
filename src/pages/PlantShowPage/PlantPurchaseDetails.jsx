/* eslint-disable react/prop-types */
import clsx from "clsx";
import { POT_COLORS } from "services/potColors";
import { useState } from "react";
import * as cartServices from "services/cart";


const PlantPurchaseDetails = (props) => {
    const { featuredPlant, imageIdx, setImageIdx, quantity, setQuantity } = props
    const [loading, setLoading] = useState(false)
    //console.log(featuredPlant)

    return (
        <div className=" flex-col w-full m-2 text-green-600">
            <div className="flex items-center">
                <i className="fa fa-fill text-2xl"></i>
                <p className="font-bold mx-2 text-emerald-800">Select Pot Color:</p>
            </div>
            <div className="flex pl-10">
                {featuredPlant.images.map((image, idx) => 
                    <div key={idx} className="mx-2 flex flex-col items-center" 
                        onClick={() => { setImageIdx(idx) }
                    }>
                        <div id={image.pot_color} key={image.pot_color} className={clsx("h-6 w-6 md:h-10 md:w-10 rounded-full", POT_COLORS[image.pot_color], imageIdx === idx && "outline outline-offset-2 outline-slate-500")}></div>
                        <label className={clsx("text-sm", imageIdx === idx ? "text-stone-700" : "text-stone-600")} htmlFor={image.pot_color}>{image.pot_color}</label>
                    </div>
                )}
            </div>
            <div className="flex text-stone-500 mt-4 justify-around">
                <div className="flex w-fit items-center border border-stone-500 rounded-full px-2 py-1">
                    <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>   
                        <i className="fa fa-minus"></i>
                    </button>
                    <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
                    <button onClick={() => quantity < 10 && setQuantity(quantity + 1)}>   
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
                <button 
                    className="bg-emerald-700 px-4 py-1 rounded-full text-white flex items-center justify-around"
                    onClick={async () => {
                        setLoading(true);
                        const response = await cartServices.addToCart({ plantID: featuredPlant.id, quantity: quantity, pot_color: featuredPlant["images"][imageIdx]["pot_color"] })
                        const data = await response.json();
                        if (response.status === 201) {
                            console.log(data.message);
                        } else {
                            console.log(data.error)
                        }       
                        setLoading(false);
                    }}
                >
                    <i className={clsx("fa-solid", loading ? "fa-spinner animate-spin" : "fa-cart-plus")}></i>
                    <div className="pl-2">Add to cart</div>
                </button>
            </div>
            <div className="text-xs text-red-600 text-center italic">{quantity === 10 && ("10 max per order")}</div>
        </div>
    );
}

export default PlantPurchaseDetails;