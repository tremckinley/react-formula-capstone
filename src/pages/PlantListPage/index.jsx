import { useState, useContext } from "react";
import SessionContext from "contexts/SessionContext";


export default function PlantListPage() {
    const sessionContext = useContext(SessionContext);
    const sessionUsername = sessionContext.sessionUsername;

    return (<>
        <div className="flex justify-center w-full bg-emerald-700 p-2 h-24 shadow-lg shadow-gray-400">
            <div className="w-full  max-w-6xl flex justify-between items-center">
                <div className="flex items-center">
                <img className="px-4 h-20" src="https://static-task-assets.react-formula.com/capstone_logo_light.png" alt="logo" />
                <div className="font-bio text-white text-3xl">Rica&apos;s Plants</div>
                </div>
            <div className="px-2 flex text-xl text-emerald-300 items-center font-semibold">
                <i className="m-2 fa-solid fa-user bg-emerald-800 rounded-full py-3 px-3"></i>
                <div>{sessionUsername}</div>
            </div>
            </div>
        </div>
        <div>Plant List Page!</div>
        </>
    )

}