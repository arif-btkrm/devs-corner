import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import LogoPath from "../../../../client/src/assets/Devs'Corner.svg";
import Logo from "../../Atoms/Logo";
import AvatarMenu from "../../Molecules/AvatarMenu/AvatarMenu";
const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Logo Src={LogoPath} Txt="D" Size={33} /> Devs' Corner
          </Typography>
          <AvatarMenu />
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;