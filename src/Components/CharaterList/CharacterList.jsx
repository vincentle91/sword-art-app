import React from 'react'
import { CharacterListItem } from './CharacterListItem/CharacterListItem'
import './CharacterList.css'
const characters = [
    {name: "Vincent", health: 100, fraction:"Vietnamese",weapon: "sword",damagePerHit: 15},
    {name: "Varen", health: 150, fraction:"US",weapon: "Dagger",damagePerHit: 20},
    {name: "Batman", health: 100, fraction:"Gotham",weapon: "Bare Hand",damagePerHit: 75},
    {name: "Superman", health: 1000, fraction:"Cryton",weapon: "Super Power",damagePerHit: 80}
  ]
 
  // Props are passed  to the component via attributes
  export const CharacterList = () => {
      // return true if math random returns more than 0.5
      const isChampion = Math.random()  > 0.5;
    return (
      <li>
          {characters.map((character) => (
           <CharacterListItem isChampion={Math.random() > 0.5} character={character} />
          ))}
      </li>
    )
  }
  