import React from "react";
import { PERSON_PER_PAGE } from '../utils/constants';
import Card from  './Card';

const Personagens = ({personagens, page, house}) => {
    const startIndex = (page - 1) * PERSON_PER_PAGE;
    let selectedPerson = personagens.slice(startIndex, startIndex + PERSON_PER_PAGE)
    if(house){
        selectedPerson = personagens.filter(personagem => personagem.house == house)
    }
    return (
      <div id="personagens">
        {selectedPerson.map((personagem) => (
          <Card personagem={personagem} key={personagem.id} />
        ))}
      </div>
    );
}

export default Personagens;