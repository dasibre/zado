import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    boxShadow: "unset !important",
    borderRadius: "20px !important",
    border: "1px solid #DBDBDB !important",
    background: "#fff",
  },
  cardButton: {
    color: "#2178CD",
    background: "#2178CD10",
    padding: "8px 10px",
    fontSize: "14px",
    fontWeight: "500",
    width: "fit-content",
    borderRadius: "6px",
    "@media (max-width: 600px)": {
      fontSize: "10px !important",
      padding: "5px 6px",
    },
  },
}));

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2178CD",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
    border: {
      main: "#DBDBDB",
    },
  },
  components: {
    // button -----------
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          textTransform: "capitalize !important",
          fontSize: "16px !important",
          lineHeight: "1 !important",
          fontWeight: "500",
          color: "#fff",
          padding: "15px 30px",
          width: "fit-content",
          minWidth: "unset",
          whiteSpace: "nowrap",
          boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",
          "@media (max-width: 600px)": {
            fontSize: "14px !important",
            padding: "15px 30px",
          },
          "& .MuiButton-startIcon svg": {
            "@media (max-width: 600px)": {
              fontSize: "19px !important",
            },
          },
        },
        containedWhite: {
          color: "#00074E",
        },
        sizeSmall: {
          padding: "10px 25px !important",
          fontSize: "16px !important",
          boxShadow: "unset",
          "@media (max-width: 600px)": {
            fontSize: "14px !important",
            padding: "10px 20px !important",
          },
        },
        containedGreen: {
          padding: "10px 20px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "7px",
        },
      },
    },
    // button -----------
    // input ------------

    // input ------------
    // select ------------
    MuiSelect: {
      styleOverrides: {
        select: {
          borderRadius: "2px",
          fontSize: "16px",
          fontWeight: "400",
          padding: "15px 20px",
          minHeight: "unset",
          color: "#000",
          background: "#fff",
          boxShadow: "unset",
          "@media (max-width: 600px)": {
            fontSize: "14px !important",
            padding: "10px 15px",
          },
          "& .MuiInputBase-root:hover": {
            // border: '1px solid #454545 !important',
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#000",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          "@media (max-width: 600px)": {
            fontSize: "14px !important",
            minHeight: "35px !important",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          zIndex: "99999",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          padding: "6px !important",
          paddingRight: "39px !important",
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {},
        inputRoot: {},
        input: {
          width: "unset !important",
        },
        option: {
          borderBottom: "1px solid #DBDBDB",
          "&:last-of-type": {
            borderBottom: "none",
          },
        },
        listbox: {
          padding: 0,
          "& .MuiAutocomplete-option": {
            borderBottom: "1px solid #DBDBDB",
            "&:last-of-type": {
              borderBottom: "none",
            },
          },
        },
      },
    },
    // select ------------

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#202020",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
  },
});
