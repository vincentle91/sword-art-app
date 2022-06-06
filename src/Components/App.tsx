import React from 'react';
import './App.css';

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
  const characters = [
    {name: "Vincent", health: 100, fraction:"Vietnamese",weapon: "sword",damagePerHit: 15},
    {name: "Varen", health: 150, fraction:"US",weapon: "Dagger",damagePerHit: 20},
    {name: "Batman", health: 100, fraction:"Gotham",weapon: "Bare Hand",damagePerHit: 75},
    {name: "Superman", health: 1000, fraction:"Cryton",weapon: "Super Power",damagePerHit: 80}
  ]
  const header = (
    <div className = "App">
      <h1 className = "jsx-style"> Hello, Sword Art Gamers</h1>
      <h3>Welcome</h3>
    </div>
  );
  // JSX is called javascript XML, this is syntax extension 
  // for rendering HTML in javascript
  // Elements can also be rendering  by React.createElement
  const swordArtHeader = React.createElement(
    'h1',
    {className: 'sword-art-header'},
    'Hello, Sword Art Gamers!'
  );
  return (
    <ul>
    {characters.map((character )=>
       (
        <li key={character.name}>
            <h3>{character.name}</h3>
            <p>{character.health}</p>      
            <p>{character.fraction}</p>
            <p>{character.weapon}</p>
            <p>{character.damagePerHit}</p>
        </li>
    ))}
    </ul>
  );
};

  //   // We can only use classname in JSX, because class is reserved word in javascript
  //   <div className="App">
  //     <h1>Hello, this is Sword Art Gamers</h1>
  //   </div>
  // );


export default App;
