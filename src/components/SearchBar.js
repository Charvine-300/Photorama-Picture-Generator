import './App.css';

const SearchBar = ({side, bottom, barlow}) => {
    return (  
        <div className="list-container">
            <div className="booker-t">
                <button onClick={bottom} type="submit"> Search </button>
                <input onBlur={side} type="text" name="photo" placeholder="Find Something..." />
            </div>
            <p>{barlow}</p>
        </div>
    );
}
 
export default SearchBar;
          