import { useEffect, useState } from "react";
import Chapeu from '../assets/img/chapeu-de-bruxa.png'

function Card({personagem}) {
  return (
    <div className="card">
      <div className="foto">
        <img
          src={personagem.image ? personagem.image : Chapeu}
          alt={personagem.name}
        />
      </div>
      <div className="infos">
        <h2>{personagem.name}</h2>
        <p>Nascimento: {personagem.dateOfBirth}</p>
        <p>Casa: {personagem.house}</p>
        <p>Patrono: {personagem.patronus}</p>
        <p>Ator: {personagem.actor}</p>
        <p>Está vivo: {personagem.alive ? "Sim" : "Não"}</p>
      </div>
    </div>
  );
}

export default Card;
