import React ,{Component} from "react";

export default class LandingButton extends Component{
    render(){
        return(
            <div className="btn-container">
                
                <h4><strong><p>Search information about your favourite movies &amp; tv shows ,</p>know about their IMDB ratings ,cast and much more<p></p></strong></h4>
                <form action="/movies">
                    <button class="cstm-btn" type="submit">Start Exploring</button>
                </form>
            </div>
        )
    }
}