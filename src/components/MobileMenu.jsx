import MenuItem from "./MenuItem";
import "./mobileMenu.css";

const MobileMenu = ({ menuItems, seletedMenu, selectMenu, togaleMenu, isOpen }) => {
    return (
        <nav className={`mobileMenu ${isOpen ? "active" : ""}`}>
            <ul>
                {menuItems.map((menuItem) => {
                    return (
                        <MenuItem 
                          key={menuItem} 
                          menuItem={menuItem} 
                          seletedMenu={seletedMenu} 
                          selectMenu={selectMenu} 
                          togaleMenu={togaleMenu}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}

export default MobileMenu;