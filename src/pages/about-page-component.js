import Navbar from "../components/navbar-component";
export default function About(){
    return(
        <div>
            <Navbar/>
            <div className="about">
                <p>Welcome</p>
                <p>MovInfo is a website where you can search information related 
                  to your favourite movies and TV shows and also can know their IMDB , 
                  Metacritic etc. ratings and all other information such as their 
                  Cast , Directors , Box Office collections.
                  </p>
                <p>Technology stack :This application is build using HTML , CSS , JavaScript &amp; ReactJS</p>
                <p>API used : OMDB API <i className="fa fa-link"></i><a href="http://www.omdbapi.com">www.omdbapi.com</a></p>
            </div>
        </div>
    )
}