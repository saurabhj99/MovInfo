import {Component} from "react";
import SearchResult from "./search-result-component";
import ErrorNotification from "./error-notification-component";


const API_KEY="thewdb";


export default class Search extends Component{

    constructor(props){
        super(props);
        this.state={query:'',results:''}
    }

    handleChange=(e)=>{
        this.setState({query:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.getResults();
        this.setState({query:''})
    }

    getResults=async()=>{
     const url=`http://www.omdbapi.com/?&s=${this.state.query}&type=${this.props.type}&apikey=${API_KEY}`;
     try{
        const response= await fetch(url);
        const data=await response.json();
        if(data.Response==="False"){
            this.setState({results:<ErrorNotification errorType="SearchError"/>});
            
        }
        else{
            const searchResults=JSON.parse(JSON.stringify(data.Search));
            this.setState({results:this.setResults(searchResults)});
        }
    }catch(error){
        this.setState({results:<ErrorNotification errorType="NetworkError"/>})
        
     }}

    setResults=(searchResults)=>{
        return searchResults.map((result)=>(
            
                <SearchResult key={result.imdbID}
                              Title={result.Title}
                              Poster={result.Poster}
                              Year={result.Year}
                              imdbID={result.imdbID}
                />
            
        ))
        
    }

    render(){
        
        
        return(
<div className="main-content">
    <div  className="Search-form">
        <form onSubmit={this.handleSubmit}>
            <div className="query-Form">
                <div className="item-1">
                    <input  onChange={this.handleChange}  value={this.state.query} type="text" placeholder={`Search Here for ${this.props.text}`}/>
                </div>
                <div className="item-2">
                    <button  type="submit"><i className="fa fa-search" style={{fontSize:"17px"}}></i></button>
                </div>
            </div>
          </form>
        
    </div>
    <div className="results">
        {this.state.results}
    </div>
    </div>
    
        )
    }
}