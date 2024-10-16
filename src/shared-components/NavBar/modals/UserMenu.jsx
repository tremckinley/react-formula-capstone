import SessionContext from "contexts/SessionContext";
import { useContext } from "react";

export default function UserMenu() {
    const sessionContext = useContext(SessionContext)
    return (
        <div className="absolute flex flex-col left-1/2 top-14 text-xs min-w-24 bg-slate-200 rounded-md p-2 shadow-gray shadow-lg hover:text-emerald-800">
        <button
            onClick={() => {
            sessionContext.signOut();
            }}
        >
            <i className="fa fa-sign-out mr-2"></i>
            Sign-out
        </button>
        </div>
    );
}
