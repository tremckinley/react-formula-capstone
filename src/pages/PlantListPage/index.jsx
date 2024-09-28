import NavBar from "shared-components/NavBar"
import SignOutRedirect from "shared-components/SignOutRedirect"

export default function PlantListPage() {
    return (
        <SignOutRedirect>
            <NavBar />
            <div>Plant List Page!</div>
        </SignOutRedirect>
    )

}