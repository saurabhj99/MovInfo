import Search from "../components/search-component";
import Navbar from "../components/navbar-component";

 export default function Mainpage(props){
    return(
        <div className="Container">
            <Navbar/>
            <Search type={props.type} text={props.text}/>
        </div>
    )

}