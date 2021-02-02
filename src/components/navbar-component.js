import React ,{Component} from "react";
import {Link} from "react-router-dom";
export default class Navbar extends Component{
 
    render(){
        return(
        
            <nav className={`navbar navbar-expand-lg ${(this.props.Style) ? this.props.Style:"bgdark"}`} >
                 
                 <div className="navbar-brand header" >
                 <h1 className="bold"><strong>MovInfo<span><i  style={{marginLeft:"5px"}} className="fa fa-play-circle"></i></span></strong></h1>
                 </div>

                 <div>
                    <button className="navbar-toggler"  id="togglebtn" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <i className="fa fa-bars" style={{fontSize:"30px",color:"white"}}></i>
                    </button>
                 </div>
                 
                <div className="collapse navbar-collapse mt-auto mb-2" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-2">
                        <Link className="nav-link" to="/movies">MOVIES</Link>
                    </li>
                    <li className="nav-item mr-2">
                        <Link className="nav-link " to="/tvshows">TV SHOWS</Link>
                    </li>
                    <li className="nav-item mr-2">
                        <Link className="nav-link" to="/about">ABOUT</Link>
                    </li>
                </ul>
                </div>

            </nav>
        
        )
    }
}