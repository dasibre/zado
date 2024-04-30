import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";
import Header from "./Header";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { window } = Window;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 120;
  const drawerWidthsmall = 120;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            width: "-webkit-fill-available",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "-webkit-fill-available",
              backgroundColor: "transparent",
            }}
          >
            <Header handleDrawerToggle={handleDrawerToggle} />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              backgroundColor: "transparent",
              mt: { xs: "56px", sm: "66px" },
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
