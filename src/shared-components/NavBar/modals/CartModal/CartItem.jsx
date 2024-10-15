/* eslint-disable react/prop-types */
/*{
    "id": 375,
    "image_src": "https://static-task-assets.react-formula.com/smoll_money_tree_stone.jpeg",
    "plant_name": "Smoll Money Tree",
    "pot_color": "stone",
    "price_per_unit": 37,
    "quantity": 1
}*/

export default function CartItem(props) {
    const {item} = props;

    return (
        <div className="flex w-full my-2 h-24 md:h-36 px-4">
            <img src={item.image_src} className=" h-full w-auto rounded-lg"/>
            <div className="flex flex-col w-full mx-2 text-stone-500">
                <div className="flex justify-between font-bold ">
                    <div className="font-bio text-emerald-800 text-xl">{item.plant_name}</div>
                    <div >{`$${item.price_per_unit}`}</div>
                </div>
                <div className="flex">
                    <div className="w-10 mr-4">color:</div>
                    <div className="font-bold">{item.pot_color}</div>
                </div>
                <div className="flex">
                    <div className="w-10 mr-4">qty:</div>
                    <div className="font-bold">{item.quantity}</div>
                </div>
            </div>
        </div>
    )
}