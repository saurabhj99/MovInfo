import LandingButton from "../components/landingpage-btn-component";
import Navbar from "../components/navbar-component";
import Video from "../components/video-component";

var Classes="transparent";

export default function LandingPage(){
    return(
    <div>
        <div className="overlay"></div>
        <Navbar Style={Classes}/>
        <Video/>
        <LandingButton/>
        
    </div>
    );
}

