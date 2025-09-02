import { Box } from "@mantine/core";
// import { HeaderMegaMenu } from "../Header/Header";
// import { NavbarMinimal } from "../Navbar/Navbar";
import { StatsRing } from "../Stats/Stats";
import { UsersRolesTable } from "../Tables/Tables";

const BoxPage = () => {
  return (
    <Box className="">
      
      <div className="flex">
       
        <div className=" h-[20px] w-[100%] p-[20px]">
          <StatsRing />
          <div className="mt-[10px]">
            <UsersRolesTable />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BoxPage;
