import React from "react";
import locationIcon from "../images/Fill 220.png"

function Card(props) {
    return(
        <div>
            <div className="card">
                <img src={props.imageUrl} alt="Mount Fuji image." className="card--image"/>
                <div className="card--info">
                    <div className="card--header">
                        <img src={locationIcon} alt="location icon." className="card--locationIcon"/>
                        <h2 className="card--location">{props.location}</h2>
                        <a rel="noreferrer" href={props.googleMapsUrl} target="_blank" className="gray">View on Google Maps</a>
                    </div>
                    <h1 className="card--title">{props.title}</h1>
                    <p className="card--date">{`${props.startDate} - ${props.endDate}`}</p>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
            <hr className="card--divider"></hr>
        </div>
        
    )
}

export default Card;