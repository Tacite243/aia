import VideoPage from '../pages/videoPage';
import QuestionSpace from '../pages/questionsPage';
import SupportsPage from '../pages/SupportsPage';
import IntervenantPage from '../pages/IntervenantPage';
import FileUpload from '../pages/upload';

const routes = [
  { path: '/video', component: VideoPage, name: 'Vidéo' },
  { path: '/questions', component: QuestionSpace, name: 'Questions' },
  { path: '/ressources', component: FileUpload, name: 'Ressources' },
  { path: '/intervenant', component: IntervenantPage, name: 'Intervenants' }
];

export default routes;
