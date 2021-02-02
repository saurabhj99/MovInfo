import React ,{Component} from "react";
import {Link} from "react-router-dom";

export default class LandingButton extends Component{
    render(){
        return(
            <div className="btn-container">
                
                <h4><strong><p>Search information about your favourite movies &amp; tv shows ,</p>know about their IMDB ratings ,cast and much more<p></p></strong></h4>
                <Link to="/movies">
                    <button class="cstm-btn" type="submit">Start Exploring</button>
               </Link>
            </div>
        )
    }
}
