import React from 'react'
import './CharacterListItem.css'
// You can pass data  to the react component  by using props
// props is an object that groups data that is passed  to a component 
export const CharacterListItem = ({character, isChampion}) => {
    const {name, health, fraction, weapon, damagePerHit} = character;
  return (
    <li key={name}>
    <span className="character-name">{isChampion ? `Champion ${name}` : name}</span>
    <span>{health}</span>
    <span>{fraction}</span>
    <span>{weapon}</span>
    <span>{damagePerHit}</span>
  </li>
  );
}
