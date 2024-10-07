export default function LoadingSpinner() {
    return (
        <div className="pt-40 flex flex-col items-center text-emerald-600 font-bio ">
            <i className="fa fa-sun animate-spin text-3xl"></i>
            <div>Please Wait...</div>
        </div>
    )
}