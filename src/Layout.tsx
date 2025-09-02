import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { HeaderMegaMenu } from "./Header/Header";
import { NavbarMinimal } from "./Navbar/Navbar";

export default function Layout() {
  return (
    <Box>
      <HeaderMegaMenu />
      <div className="flex">
        <NavbarMinimal />
        <div className="h-[20px] w-[100%] p-[20px]">
          <Outlet />
        </div>
      </div>
    </Box>
  );
}
