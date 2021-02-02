import {Component} from "react";
import Navbar from "../components/navbar-component";
import ErrorNotification from "../components/error-notification-component";
const API_KEY="thewdb";
const fields=["Released","Actors","Director","Writer","Runtime","Genre","Language","Country","Plot","Awards","BoxOffice"]

export default class ShowInfo extends Component{
    constructor(props){
        super(props);
        this.state={content:<div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20vh",maxWidth:"100%",width:"100%",textAlign:"center",fontSize:"30px"}}>
                                <div style={{width:"150px", height:"150px"}} className="spinner-border text-primary justify-content-center "></div>
                                <div>Your Content is Loading....</div>
                            </div>}
    }

    componentDidMount=()=>{
        const response=this.fetchInfo();
        response.then((data)=>{
            setTimeout(()=>this.setState({content:this.setContent(data)}),1000);
        
        }).catch((error)=>{
            this.setState({content:<ErrorNotification errorType="NetworkError"/>})}
        )}

    fetchInfo=async()=>{
        const url=`http://www.omdbapi.com/?&i=${this.props.match.params.id}&plot=full&apikey=${API_KEY}`;
        const response=await fetch(url);
        const data=await response.json();
        return data;
          
    }

    setContent=(data)=>{
        const len=Object.keys(data.Ratings).length;
        return (
            <div>
                <div className="color-bg"></div>
                <div className="main-content full-width">
                    <div className="info">
                        <div className="details-1">
                            <div className="Poster">
                                <img src={data.Poster!=="N/A"?data.Poster:"/assets/images/posterdefault.jpg"} alt={data.Title}/>
                            </div>
                            <div>
                                <img width="50px" style={{marginRight:"3vh"}} alt="imdb" src="/assets/images/imdb.png"/>
                                IMDB - { (len<1)? "N/A":data.Ratings[0].Value}
                            </div>
                            <div>
                                <img width="35px" style={{marginRight:"5vh"}} alt="metacritic" src="/assets/images/metacritic.png"/>
                                Metacritic - {(len>1) ?data.Ratings[1].Value:"N/A"}
                            </div>
                            <div>
                                <img  width="50px" style={{marginRight:"3vh"}}alt="rottentomatoes" src="/assets/images/rottentomatoes.jpg"/>
                                RottenTomatoes - {(len>2) ? data.Ratings[2].Value:"N/A"}
                            </div>
                        </div>
                        <div className="details-2">
                            <h1>{data.Title}</h1>
                            {fields.map((field,i)=>
                                <p key={i}><strong>{field+": "} </strong>{data[field]}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return(
            <div>
            <Navbar/>
            {this.state.content}
            </div>
        )
    }
}