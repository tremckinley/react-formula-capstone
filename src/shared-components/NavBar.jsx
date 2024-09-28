import { useContext, useState } from "react";
import SessionContext from "contexts/SessionContext";



const NavBar = () => {
    const sessionContext = useContext(SessionContext);
    const sessionUsername = sessionContext.sessionUsername;
    const [menuOpen, setMenuOpen] = useState(false);
    

    return (
        <div className="flex justify-center w-full bg-emerald-700 p-2 h-24 shadow-lg shadow-gray-400" onMouseLeave={() => setMenuOpen(false)}>
            <div className="w-full  max-w-5xl flex justify-between items-center">
                <div className="flex items-center">
                    <img className="px-4 h-20" src="https://static-task-assets.react-formula.com/capstone_logo_light.png" alt="logo" />
                    <div className="font-bio text-white text-3xl">Rica&apos;s Plants</div>
                </div>
                <div className="relative h-full" >
                    <button className="h-full" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="px-2 flex text-lg text-emerald-300 items-center font-semibold">
                            <i className="m-2 fa-solid fa-user bg-emerald-800 rounded-full py-3 px-3"></i>
                            <div>{sessionUsername}</div>
                        </div>
                    </button>
                    {menuOpen &&
                        <div className="absolute flex flex-col left-1/2 top-14 text-xs min-w-24 bg-slate-200 rounded-md p-2 shadow-gray shadow-lg hover:text-emerald-800">
                            <button 
                                onClick={() => {
                                    sessionContext.signOut()
                                }}
                            >
                                <i className="fa fa-sign-out mr-2"></i>
                                Sign-out
                            </button>
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar;