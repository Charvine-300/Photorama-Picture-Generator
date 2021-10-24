import './App.css';
import SearchBar from './SearchBar';
import ImageList from './imageList';
import Footer from './Footer';


const Container = ({ isPending, side, bottom, barlow, results, count, setCount}) => {
    
    return (  
       <div id="container">
            <SearchBar side={side} bottom={bottom} barlow={barlow} />
            {isPending && <p> Loading Images...</p>}
            {results && <ImageList results={results} count={count} setCount={setCount} />}
            <Footer count={count} setCount={setCount} />
       </div>
    );
}
 
export default Container;