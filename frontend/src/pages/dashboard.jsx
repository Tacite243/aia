import Header from "../components/header/head";
import Sider from "../components/sideBar/sider";
import Video from "../components/video";
import data from "../data.json"


export default function Dashboard() {
    const eventData = data.eventInfo
    return (
        <div className="dashboard">
            <Header />
            <div className="body">
                <Sider />
                <div className="main">
                    <h4 className="title">{eventData.title}</h4>
                    <p>Place disponible : {eventData.place}</p>
                    <div className="description">
                        <p>{eventData.description}</p>
                    </div>
                    <div className="main-grid">
                        {/* <Intervenant /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}