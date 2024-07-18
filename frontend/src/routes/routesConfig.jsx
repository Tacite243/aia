import VideoPage from '../pages/videoPage';
import QuestionSpace from '../pages/questionsPage';
import IntervenantPage from '../pages/IntervenantPage';
import FileUpload from '../pages/upload';
import Board from '../pages/board';

const routes = [
    { path: '/dashboard/:eventId', component: Board, name: 'Tableau de board' },
    { path: '/video', component: VideoPage, name: 'Vidéo' },
    { path: '/questions', component: QuestionSpace, name: 'Questions' },
    { path: '/ressources', component: FileUpload, name: 'Ressources' },
    { path: '/intervenants', component: IntervenantPage, name: 'Intervenants' },
];

export default routes;
