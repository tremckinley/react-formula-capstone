/* eslint-disable react/prop-types */
import { useState } from "react";
import PlantHeaderSection from "./PlantHeaderSection";
import BenefitBox from "./BenefitBox";
import PlantPurchaseDetails from "./PlantPurchaseDetails";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const PlantInfoSection = (props) => {
    const { featuredPlant } = props;
    const [ imageIdx, setImageIdx ] = useState(0)
    const [ quantity, setQuantity ] = useState(1)

    return (
        <div className="flex justify-center min-h-screen bg-green-50">
          <div className="w-full max-w-5xl p-4">
            <div className="flex flex-col items-center md:flex-row md:justify-around">
              <div className="md:hidden flex-col items-center">
                <PlantHeaderSection featuredPlant={featuredPlant} />
              </div>
              <div className="flex flex-col items-center py-5">
                <Zoom>
                  <img
                    src={featuredPlant.images[imageIdx]["src"]}
                    alt={`A picture of a ${featuredPlant}`}
                    className="h-auto w-80 object-cover shadow-lg rounded-lg"
                  />
                </Zoom>
                <div className="md:hidden">
                    <PlantPurchaseDetails featuredPlant={featuredPlant} imageIdx={imageIdx} setImageIdx={setImageIdx} quantity={quantity} setQuantity={setQuantity} />
                </div>
                <div className="flex h-auto w-80 mt-5 text-stone-500 text-sm justify-between">
                  <BenefitBox
                    icon="far fa-check-circle"
                    title="Guaranteed Healthy"
                    description="Guaranteed to arrive healthy or your money back"
                  />
                  <div className="border-l-2 border-stone-300 "></div>
                  <BenefitBox
                    icon="fa fa-truck-fast"
                    title="Free Shipping"
                    description="Get free ground shipping on orders of $50 or more"
                  />
                </div>
              </div>
              <div className="md:max-w-md md:w-full md:ml-10">
                <div className="hidden md:flex">
                  <PlantHeaderSection featuredPlant={featuredPlant} />
                </div>
                <p className="text-stone-500 leading-relaxed my-5">{featuredPlant.care_instructions}</p>
                <div className="hidden md:flex">
                <PlantPurchaseDetails featuredPlant={featuredPlant} imageIdx={imageIdx} setImageIdx={setImageIdx} quantity={quantity} setQuantity={setQuantity} />
                </div>
              </div>
            </div>

          </div>
        </div>
    )
}

export default PlantInfoSection;