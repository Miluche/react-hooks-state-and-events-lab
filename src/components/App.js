import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [colorScheme, setColorScheme] = useState("Light");
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = colorScheme === "Dark" ? "App dark" : "App light";

  function toggleScheme() {
    if (colorScheme.toLowerCase() === "light") {
      setColorScheme("Dark");
      return;
    } else {
      setColorScheme("Light");
      return;
    }
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleScheme}>{colorScheme} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
