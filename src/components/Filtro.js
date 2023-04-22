import React from "react";
import Gryffindor from '../assets/img/Gryffindor.png'
import Slytherin from '../assets/img/Slytherin.png'
import Hufflepuff from '../assets/img/Hufflepuff.png'
import Ravenclaw from '../assets/img/Ravenclaw.png'
import Houses from '../assets/img/houses.png'

const Filtro = ({handleClickHouse, house}) => {
    return (
        <div id="filtro">
            <div className="infos">
                <h1>{house ? house : "Filtre por casas" }</h1>
            </div>
            
            <div className="buttons-house">
                <button className="btn-house" onClick={() => handleClickHouse("")}><img src={Houses} alt="Todas as casas"/></button>
                <button className="btn-house" onClick={() => handleClickHouse("Gryffindor")}> <img src={Gryffindor} alt="Gryffindor"/></button>
                <button className="btn-house" onClick={() => handleClickHouse("Slytherin")}> <img src={Slytherin} alt="Slytherin"/></button>
                <button className="btn-house" onClick={() => handleClickHouse("Hufflepuff")}> <img src={Hufflepuff} alt="Hufflepuff"/></button>
                <button className="btn-house" onClick={() => handleClickHouse("Ravenclaw")}> <img src={Ravenclaw} alt="Ravenclaw"/></button>
            </div>
        </div>
    )
}

export default Filtro;