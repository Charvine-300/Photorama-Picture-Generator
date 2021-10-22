import './App.css';
import photoRama from './logo.svg';

const SideBar = ({sidebarSection}) => {
    return (  
        <div id="side-bar">
            <div className="logo-housing">
                <img src={photoRama} alt="logo rama" id="photorama-logo" />
                <h1>PhotoRama </h1>
            </div>
            <div className="list-housing">
                <ul>
                    <li>Home </li>
                    <li> Message </li>
                    <h1> SHARE </h1>
                    <li onClick={sidebarSection}> World </li>
                    <li> Challenge </li>
                    <li> Party </li>
                    <li> Connect </li>
                    <li> Group </li>
                </ul>
            </div>
        </div>
    );
}
 
export default SideBar;
<div id="side-bar">

</div>