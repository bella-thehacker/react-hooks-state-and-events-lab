import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  const [isDark, setDarkMode] = useState(false)

   function setDark() {
    setDarkMode(!isDark)
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={setDark} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
