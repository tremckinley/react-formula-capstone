export default function FormContainer(props) {
    const {children} = props;

    return (
        <div className="flex flex-col items-center font-noto">
            <div className="flex flex-col items-center">
                <img src="https://static-task-assets.react-formula.com/capstone_logo_dark.png" alt="rica's plants logo"></img>
                <h1 className="text-4xl text-emerald-800 font-bio">Rica's Plants</h1>
            </div>
            {children}
        </div>
    )

}