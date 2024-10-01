const PlantItem = (props) => {
    const {name, price, photoURL} = props;

    return (
            <div className="flex flex-col items-center m-2 w-72 h-72 object-cover text-emerald-800 text-lg">
                <img className="object-cover h-full w-full shadow-lg" src={photoURL} alt="hello"/>
                <div className="w-full flex justify-between p-1 font-bio font-semibold">
                    <div>{name}</div>
                    <div>{`$${price}`}</div>
                </div>
            </div>
    )

}

export default PlantItem;