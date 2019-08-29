//PAGES
import Upcoming from './pages/upcoming';
import MoviePg from './pages/Movie';
import SearchMovie from './pages/searchMovie';
//Components
import MoviePreview from './components/moviepreview';
import MovieList from './components/movieList';
import SearchBar from './components/searchbar';
//Actions
import { apiUpcoming, apiGetMovie, selectMovie, apiSearchMovie, apiCleanSearch, SELECT, MOVIES, SEARCH_TEST, SEARCH_RESULT } from './api/movies';
import reduce from './reduce/movies';


//Exports
export default Upcoming;
export { MoviePg, SearchMovie, MoviePreview, SearchBar, MovieList, apiUpcoming, apiGetMovie, apiCleanSearch, reduce, MOVIES, selectMovie, apiSearchMovie, SELECT, SEARCH_TEST, SEARCH_RESULT };
