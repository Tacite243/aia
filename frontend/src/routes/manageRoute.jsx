import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sider from "../components/sideBar/sider";
import Dashboard from '../pages/dashboard';
import VideoPage from '../pages/videoPage';
import QuestionSpace from "../pages/questionsPage";
import CreateEventForm from '../components/createEvent';
import AboutPage from '../pages/aboutPage';
import HelpPage from '../pages/helpPage';


export default function ManageRoute() {
    <Router>
        <div className="app">
            <Sider />
            <div className="content">
                <Switch>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/video' element={<VideoPage />} />
                    <Route path='/questions' element={<QuestionSpace />} />
                    <Route path='/default' element={<CreateEventForm />} />
                </Switch>
            </div>
        </div>
    </Router>
}