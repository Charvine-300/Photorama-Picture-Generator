import './App.css';


const ImageList = ({results}) => {
    return (  
        <div className="list-container border-bottom">
          <div id="search-engine-flexbox">
            {results.map((photo) => (
              <img src={photo.urls.small} key={photo.id} alt={photo.location}/>
            ))}
          </div>
        </div>
    );
}
 
export default ImageList;