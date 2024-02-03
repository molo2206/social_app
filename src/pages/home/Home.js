import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
             <Sidebar />
            </div>

        </>

    )
}
