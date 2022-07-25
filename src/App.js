import './App.scss';
import BasicSearch from './components/search/BasicSearch';
import TableSearch from './components/search/TableSearch';
import StarRating from './components/starRating/StarRating';

function App() {

  const scrollTop = () => {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="App">
      <>
        <h1>React Playground</h1>
        <a className="toc" href="#starRating">STAR RATING</a>
        <a className="toc" href="#basicSearch">BASIC SEARCH</a>
        <a className="toc" href="#tableSearch">TABLE SEARCH</a>
        <button className="scrollTop" onClick={scrollTop}>&#8593;</button>

        <StarRating totalStars={9} />
        <BasicSearch />
        <TableSearch />
      </>
    </div>
  );
}

export default App;
