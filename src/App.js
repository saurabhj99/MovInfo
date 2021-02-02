import './App.css';
import LandingPage from "./pages/landing-page-component";
import Mainpage from "./pages/mainpage-component";
import Showinfo from "./pages/show-info-component";
import About from "./pages/about-page-component";
import {Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"   component={LandingPage}/>
        <Route exact path="/movies" type="movie" component={() => (<Mainpage type="movie" text="movie titles"/>)}/>
        <Route exact path="/tvshows" type="series" component={() => (<Mainpage type="series" text="series &amp; tv shows"/>)}/>
        <Route exact path="/showinfo/:id" component={Showinfo}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
