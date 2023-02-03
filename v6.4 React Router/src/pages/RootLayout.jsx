import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
//outlet is basically props.children but for route components
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
