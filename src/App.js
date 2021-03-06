import './components/App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import Container from './components/Container';

function App() {
  const [photo, setPhoto] = useState("random");
  const clientid = "JjVDJh0mroP0QcBIoK5VrrLQIuKOa3A1btr7tGoADc8";
  const [result, setResult] = useState([]);
  const [barlow, setBarlow] = useState();
  const [count, setCount] = useState(1);
  const [isPending, setIsPending] = useState(true);


  function handleChange(event) {
    setPhoto(event.target.value)
  }

  function handleSubmit(event) {

  }

  useEffect(() => {
    axios.get("https://api.unsplash.com/search/photos?page=" + count + "&query=" + photo + "&per_page=15&client_id=" + clientid)
    .then((response) => {
      setResult(response.data.results);
      setIsPending(false);
      setBarlow(response.data.total + " images found");
    })}, [count, photo]
  );
  


  return (
    <div className="App">
      <SideBar />
      <Container isPending={isPending} results={result} count={count} setCount={setCount} side={handleChange} bottom={handleSubmit} barlow={barlow} />
    </div>

    
  );
}

export default App;
