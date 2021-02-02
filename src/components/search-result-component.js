import {Component} from "react";
import {Link} from "react-router-dom";

export default class SearchResult extends Component{
    
    render(){
        return(
            <div className="Search-result">
                <Link style={{textDecoration:"none",color:"black"}} to={`showinfo/${this.props.imdbID}`} >   
                    <div className="img-container">
                        <img src={this.props.Poster!=="N/A"?this.props.Poster:"./assets/images/defaultimage.png"} alt={this.props.Title}/>
                    </div>
                    <div style={{textAlign: "justify"}}>{this.props.Title} ({this.props.Year})</div>
                </Link>
            </div>);
    }
}