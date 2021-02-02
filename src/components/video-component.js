import React ,{Component} from "react";

export default class Video extends Component{
    render(){
        return(
            <div id="video-container">
                <video autoPlay muted loop id="vidBackground">
                <source src="./assets/video/Girl Choosing Movies On TV.mp4" type="video/mp4"/>
            Your browser does not support HTML5 video.
                </video>
            </div>
            
        )
    }
}