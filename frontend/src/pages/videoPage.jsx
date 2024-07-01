import Header from "../components/header/head";
import Sider from "../components/sider";
import Video from "../components/video";



export default function VideoPage() {
    return (
        <div className="video-page">
            <Header />
            <div className="body">
                <Sider />
                <div className="main">
                    <div style={{ minWidth: '100%', minHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Video />
                    </div>
                </div>
            </div>
        </div>
    )
}