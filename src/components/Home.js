import Sections from "./homePage/Sections"
import Clients from "./homePage/Clients"
import FormaliteAdministratives from "./homePage/FormaliteAdministratives"
import HelpUs from "./homePage/HelpUs"
import SearchBar from "./SearchBar"


export default function Home() {
    return (
        <div className="relative bg-white overflow-hidden mt-5 mb-5">
            <div className="max-w-7xl mx-auto">
                <SearchBar />
                <Sections />
                <FormaliteAdministratives />
                <HelpUs />
                <Clients />
            </div>
        </div >
    )
}