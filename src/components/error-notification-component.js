
export default function ErrorNotification(props){
    const errorObject={
        'NetworkError':"Your device might not be connected to the internet please try again",
        'SearchError':"Your search did not match any results please try searching again"
           
    }
    return(
        <div className="error">
            <h5 >   
                <i style={{color:"red"}} className="fa fa-exclamation-circle" aria-hidden="true">&nbsp;</i>
                {errorObject[props.errorType]}
            </h5>
        </div>
            )
    
}