import { Outlet } from "react-router-dom";
import { AuthLayoutContainer } from "./style";

export default function AuthLayout() {
  return (
    <AuthLayoutContainer>
        <Outlet />
    </AuthLayoutContainer>
  )
}
