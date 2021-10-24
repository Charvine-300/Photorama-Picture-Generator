import './App.css';

const Footer = ({count, setCount}) => {
    return (  
        <footer>
            <button className="placid-button mace" type="submit" onClick={() => {setCount(count - 1)}}> Previous </button>
            <button className="placid-button" type="submit" onClick={() => {setCount(count + 1)}}> Next </button>
        </footer>
    );
}
 
export default Footer;