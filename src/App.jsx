import { useState } from "react";

import "./App.css";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const menuItems = ['Home', 'About', 'Projects', "Skills", "Contact"];

  let [menuState, setMenu] = useState(false);
  const togaleMenu = () => {
    setMenu(!menuState);
  };
  let [seletedMenu, setSelectedMenu] = useState("Home");
  const selectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Header togaleMenu={togaleMenu} menuState={menuState} selectMenu={selectMenu} menuItems={menuItems} seletedMenu={seletedMenu}></Header>
      {menuState ? <MobileMenu selectMenu={selectMenu} menuItems={menuItems} seletedMenu={seletedMenu} togaleMenu={togaleMenu} isOpen={menuState}></MobileMenu> : ""}
      <main>
        <Hero seletedMenu={seletedMenu}></Hero>
      </main>
    </>
  );
}

export default App;
