import Header from "../components/header/head";
import Intervenant from "../components/intervenants";
import Sider from "../components/sider";
import Video from "../components/video";


export default function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <div className="body">
                <Sider />
                <div className="main">
                    <h4 className="title">EXPO VENTE 2024</h4>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus aut laudantium maxime. Omnis temporibus nesciunt repellendus eos officia, magnam esse facere, tenetur non quidem neque aliquid, dolores deserunt et.</p>
                    </div>
                    <div className="main-grid">
                        <Intervenant />
                        <Video />
                    </div>
                </div>
            </div>
        </div>
    )
}