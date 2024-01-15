import { useLocation } from "react-router-dom"
import { NavContainer } from "./style"
import { useEffect, useState } from "react";

function Navbar() {
    const { pathname } = useLocation();
    const [navTitle, setNavTitlte] = useState('Homepage');

    useEffect(() => {
        getNavName()
    }, [pathname]);
    const getNavName = () => {
        switch(pathname){
            case "/tarot":
            setNavTitlte("Fortune");
            break
            case "/homepage":
            setNavTitlte("Homepage");
            break
            case "/todo":
            setNavTitlte("Todo list");
        }
    }
  return (
        <NavContainer>
            <h2>{navTitle}</h2>
        </NavContainer>
    )
}
export default Navbar