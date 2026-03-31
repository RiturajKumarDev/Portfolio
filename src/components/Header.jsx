import "./header.css";
import MenuItem from "./MenuItem";

const Header = ({ togaleMenu, selectMenu, menuItems, seletedMenu }) => {
  return (
    <header id="home">
      <h1>
        <a href="https://riturajkumardev.github.io/My-Portfolio/">
          <span className="R">R</span>ituraj's <span className="R">P</span>ortfolio
        </a>
      </h1><a
        href="#"
        role="button"
        className="menu-btn"
        onClick={() => togaleMenu()}
      >☰</a>
      <nav>
        <ul>
          {menuItems.map((menuItem) => {
            return (
              <MenuItem key={menuItem} menuItem={menuItem} seletedMenu={seletedMenu} selectMenu={selectMenu} togaleMenu={togaleMenu}></MenuItem>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
