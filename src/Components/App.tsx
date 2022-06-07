import React from 'react';
import './App.css';
import { CharacterList } from './CharaterList/CharacterList';
import {Login} from './Login/login'

// React application can be represented as a tree of react components
// this is react root component 
// this type of component is called functional component
// functional component should start with the capital letter,
// return JSX and be exported from a file
// try abstain from default export

// Creat a list of characters for sword art game, they should have follow properties L
// name, health, fraction, weapon, damage per hit, render the list of characters
// in the app component using list 
export const App = () =>{
  
  const header = (
    <div className = "App">
      <h1 className = "jsx-style"> Hello, Sword Art Gamers</h1>
      <h3>Welcome</h3>
    </div>
  );
  

  // JSX is called javascript XML, this is syntax extension 
  // for rendering HTML in javascript
  // Elements can also be rendering  by React.createElement
  
  // const transformCharacterToListItem = (character : any) => {
  //   return (
  //     //when you use the repeating  element in JSX, you should use key Attribute
  //     // it's required for React to be able to update the element
  //     <li key={character.name}>
  //     <h3>{character.name}</h3>
  //     <p>{character.health}</p>      
  //     <p>{character.fraction}</p>
  //     <p>{character.weapon}</p>
  //     <p>{character.damagePerHit}</p>
  // </li>
  //   );
  // };
 //const characterList = (<ul>{characters.map(transformCharacterToListItem)}</ul> );

const swordArtHeader = React.createElement(
  "h1",
  {className: "sword-art-header"},
  "Hello, Sword Art Gamers!"
);
return (<div className="App">
  <Login />
  <CharacterList />
</div>
);
};
    // <ul>
    // {characters.map((character )=>
    //    (
    //     <li key={character.name}>
    //         <h3>{character.name}</h3>
    //         <p>{character.health}</p>      
    //         <p>{character.fraction}</p>
    //         <p>{character.weapon}</p>
    //         <p>{character.damagePerHit}</p>
    //     </li>
    // ))}
    // </ul>
    
 

  //   // We can only use classname in JSX, because class is reserved word in javascript
  //   <div className="App">
  //     <h1>Hello, this is Sword Art Gamers</h1>
  //   </div>
  // );



