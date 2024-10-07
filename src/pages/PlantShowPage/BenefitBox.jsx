/* eslint-disable react/prop-types */
import clsx from "clsx";
const BenefitBox = (props) => {
    const { icon, title, description } = props;

    return (
        <div className="flex flex-col items-center px-2">
            <i className={clsx(icon,"text-green-600 text-3xl my-2")}></i>
            <div className="text-center"><b>{title}</b> <p>{description}</p></div>
        </div>
    )

}

export default BenefitBox;