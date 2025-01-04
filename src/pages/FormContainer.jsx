/* eslint-disable react/prop-types */
export default function FormContainer(props) {
    const {children} = props;

    return (
        <div className="flex h-screen">
            <div className="relative"> 
            <img 
                src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png" 
                alt="room with plants" 
                className="h-screen hidden md:flex object-cover"
            />
            <div className="bg-black/10 h-full absolute top-0 left-0 w-full"></div>
            <div className="bg-green-800/40 h-full absolute top-0 left-0 w-full"></div>
            </div>
            <div className="flex flex-1 h-screen flex-col items-center font-noto justify-center bg-emerald-50 w-full">
                <div className="flex flex-col items-center mb-5">
                    <img src="https://static-task-assets.react-formula.com/capstone_logo_dark.png" alt="rica's plants logo" className="max-h-40 md:max-h-none"></img>
                    <h1 className="text-4xl text-emerald-800 font-bio">Rica&apos;s Plants</h1>
                </div>
                {children}
            </div>
        </div>
    )

}