import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Button from "../commons/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            maxWidth: "1220px",
            justifyContent: "space-between",
            margin: "auto",
            width: "100%",
            padding: { lg: "0 !important" },
          }}
        >
          <Typography
            fontSize={{ xs: "25px", sm: "30px" }}
            fontWeight={"600"}
            color={"#fff"}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Zado
          </Typography>
          <Button
            buttonName="Sign in"
            size="small"
            variant="outlined"
            color="white"
            style={{ maxHeight: 44 }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
