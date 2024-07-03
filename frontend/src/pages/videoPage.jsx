import Header from "../components/header/head";
import Sider from "../components/sideBar/sider";
import Video from "../components/video";



export default function VideoPage() {
    return (
        <div className="video-page">
            <Header />
            <div className="body">
                <Sider />
                <div className="main">
                    <div style={{ minWidth: '90%', minHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Video />
                    </div>
                </div>
            </div>
        </div>
    )
}