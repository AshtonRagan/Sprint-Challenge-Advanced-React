import React from "react"


export default function Card(props) {
    return (<div className="person-Card">
    <h1>Name: {props.person.name}</h1>
    <h4>Country: {props.person.country}</h4>
    <h4>Searches: {props.person.searches}</h4>
    </div>)
    
}