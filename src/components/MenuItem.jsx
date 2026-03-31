
const MenuItem = ({ menuItem, seletedMenu, selectMenu,togaleMenu }) => {
    if (menuItem == seletedMenu)
        return <li id="selectedMenu" onClick={() => { selectMenu(menuItem) ,togaleMenu()}}>{menuItem}</li>
    else
        return <li onClick={() => { selectMenu(menuItem),togaleMenu(); }}>{menuItem}</li>
}

export default MenuItem;