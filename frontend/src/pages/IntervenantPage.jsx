import Header from "../components/header/head";
import Intervenant from "../components/intervenants";
import Sider from "../components/sideBar/sider";
import Video from "../components/video";


export default function IntervenantPage() {
    return (
        <div className="intervenantPage">
            <Header />
            <div className="body">
                <Sider />
                <div className="main">
                    <div className="main-intervenant">
                        <Intervenant />
                    </div>
                </div>
            </div>
        </div>
    )
}