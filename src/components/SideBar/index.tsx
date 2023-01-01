import { Container } from "./styles";
import MenuIcon from "../../../public/icons/menu.svg";
import { useState } from "react";
export const SideBar: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  
  const toogleMenu = () => {
    console.log(menuActive)
      setMenuActive(!menuActive)
  };

  return (
    <Container className={menuActive ? 'openMenu' : ''}>
      <button onClick={toogleMenu}>
        <MenuIcon />
      </button>
    </Container>
  );
};
