import { useEffect, useState } from "react";
import Chapeu from '../assets/img/chapeu-de-bruxa.png'

function Card(props) {
  return (
    <div className="card">
      <div className="foto">
        <img
          src={props.personagem.image ? props.personagem.image : Chapeu}
          alt={props.personagem.name}
        />
      </div>
      <div className="infos">
        <h2>{props.personagem.name}</h2>
        <p>Nascimento: {props.personagem.dateOfBirth}</p>
        <p>Casa: {props.personagem.house}</p>
        <p>Patrono: {props.personagem.patronus}</p>
        <p>Ator: {props.personagem.actor}</p>
        <p>Está vivo: {props.personagem.alive ? "Sim" : "Não"}</p>
      </div>
    </div>
  );
}

export default Card;
