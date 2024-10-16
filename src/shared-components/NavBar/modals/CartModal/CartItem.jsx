/* eslint-disable react/prop-types */

export default function CartItem(props) {
    const { item, removeCartItem } = props;

    return (   
            <div className="flex w-full h-24 md:h-36 px-4 mt-2 pb-2 border-b border-slate-300">
                <img src={item.image_src} className=" h-full w-auto rounded-lg" />
                <div className="flex flex-col justify-between w-full mx-2 text-stone-500">
                <div className="flex flex-col ">
                    <div className="flex justify-between font-bold ">
                        <div className="font-bio text-emerald-800 text-xl">{item.plant_name}</div>
                        <div >{`$${item.price_per_unit}`}</div>
                    </div>
                    <div className="flex">
                        <div className="w-10 mr-4">color:</div>
                        <div className="font-bold">{item.pot_color}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                        <div className="w-10 mr-4">qty:</div>
                        <div className="font-bold">{item.quantity}</div>
                        </div>
                    </div>
                </div>
                <button className="text-end text-xs hover:text-red-400 active:text-red-500" onClick={() => removeCartItem(item.id)}><i className="fa fa-trash mr-1"></i>Remove Item</button>
                </div>
            </div>
        
    )
}