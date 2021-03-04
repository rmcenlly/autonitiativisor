import './App.css';
import React, { useState } from 'react';

function App() {
  const [combatants, setCombatants] = useState([
    { name: 'Albanon', roll: Math.floor(Math.random() * 20 + 1) },
    { name: 'Calcadrin', roll: Math.floor(Math.random() * 20 + 1) }, 
    { name: 'Cicada', roll: Math.floor(Math.random() * 20 + 1) },
    { name: 'Isaak', roll: Math.floor(Math.random() * 20 + 1) },
    { name: 'Silver', roll: Math.floor(Math.random() * 20 + 1) }
  ])


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button className="button0" type="button" id="add" onClick={(e) => {
            const newCombatants = [...combatants];
            newCombatants.push({ name: '', roll: Math.floor(Math.random() * 20 + 1) });
            setCombatants(newCombatants);
          }} >Add a Combatant</button>
          <table style={{ width: "100%" }} id="tbl1">
            <thead>
              <tr>
                <th>Combatant</th>
                <th>Roll</th>
              </tr>
            </thead>
            <tbody id="table">
              {combatants.map(combatant => {
                return <tr>
                  <td className="editable">{combatant.name}</td> 
                  <td className="editable">{combatant.roll}</td>
                </tr>
              })}
            </tbody>
          </table>
          <br></br>
        </div>
      </header>
    </div>
  );
}





export default App;
