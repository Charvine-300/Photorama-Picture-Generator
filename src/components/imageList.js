import './App.css';


const ImageList = ({results, setCount, count}) => {
    return (  
        <div className="list-container border-bottom">
          <div id="search-engine-flexbox">
            {results.map((photo) => (
              <img src={photo.urls.small} key={photo.id} alt={photo.location}/>
            ))}
          </div>
          <div id="placid-lake">
            <button className="placid-button mace" type="submit" onClick={() => {setCount(count - 1)}}> Previous </button>
            <button className="placid-button" type="submit" onClick={() => {setCount(count + 1)}}> Next </button>
          </div>
        </div>
    );
}
 
export default ImageList;