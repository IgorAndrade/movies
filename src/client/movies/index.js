//PAGES
import Upcoming from './pages/upcoming';
import MoviePg from './pages/Movie';
//Components
import MoviePreview from './components/moviepreview';
import MovieList from './components/movieList';
//Actions
import { upcoming as apiUpcoming, selectMovie, SELECT, MOVIES } from './api/findMovies';
import reduce from './reduce/movies';

//Exports
export default Upcoming;
export { MoviePg, MoviePreview, MovieList, apiUpcoming, reduce, MOVIES, selectMovie, SELECT };
