import './components/App.css';
import axios from 'axios';
import ImageList from './components/imageList';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';

function App() {
  const [photo, setPhoto] = useState("random");
  const clientid = "JjVDJh0mroP0QcBIoK5VrrLQIuKOa3A1btr7tGoADc8";
  const [result, setResult] = useState([]);
  const [barlow, setBarlow] = useState();
  const [count, setCount] = useState(1);


  function handleChange(event) {
    event.preventDefault();
    setPhoto(event.target.value)
  }

  function handleSubmit(event) {
    console.log(photo);

    axios.get("https://api.unsplash.com/search/photos?page=" + count + "&query=" + photo + "&per_page=15&client_id=" + clientid)
    .then((response) => {
      setResult(response.data.results);
      setBarlow(response.data.total + " images found");
    })
  }

  useEffect(() => {
    axios.get("https://api.unsplash.com/search/photos?page=" + count + "&query=" + photo + "&per_page=15&client_id=" + clientid)
    .then((response) => {
      setResult(response.data.results);
      setBarlow(response.data.total + " images found");
    })}
  );
  


  return (
    <div className="App">
      <SideBar />
      <SearchBar side={handleChange} bottom={handleSubmit} barlow={barlow}/>
      <ImageList results={result}  count={count} setCount={setCount} />
    </div>

    
  );
}

export default App;
