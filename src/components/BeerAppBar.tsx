import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { basketCountAtom, toggleBasketAtom } from "./BeerBasket";

const BeerAppBar = () => {
  const [, toggleBasketDrawer] = useAtom(toggleBasketAtom);
  const [basketCount] = useAtom(basketCountAtom);
  return (
    <AppBar position="absolute">
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          The Beer Store
        </Typography>
        <IconButton color="inherit" onClick={() => toggleBasketDrawer(true)}>
          <Badge badgeContent={basketCount} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BeerAppBar;
