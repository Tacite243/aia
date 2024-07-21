import VideoPage from '../pages/videoPage';
import QuestionSpace from '../pages/questionsPage';
import FileUpload from '../pages/upload';
import Board from '../pages/board';

const routes = [
    { path: '/dashboard/:eventId', component: Board, name: 'Tableau de board' },
    { path: '/video', component: VideoPage, name: 'Vidéo' },
    { path: '/questions', component: QuestionSpace, name: 'Questions' },
    { path: '/ressources', component: FileUpload, name: 'Ressources' },
];

export default routes;
