import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import Navbar from "../../components/Nav";
import { MainLayoutContainer } from "./style";

export default function MainLayout() {
  return (
    <MainLayoutContainer>
      <Outlet/>
      <div className="header">
        <Menu></Menu>
        <Navbar></Navbar>
      </div>
    </MainLayoutContainer>
  )
}
