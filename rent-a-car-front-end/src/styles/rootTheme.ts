import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
import colors from "./colors";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: `${colors.blue}`,
    },
    secondary: {
      main: `${colors.lightGray}`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontSize: "12px",
          textTransform: "none",
          minWidth: "100px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "15px !important",
          backgroundColor: `${colors.mainBackground}`,
          padding: "5px",
          "&:hover": {
            backgroundColor: "#e1e1e1",
          },
          "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0",
          },
          "&.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
            {
              borderWidth: "1px",
            },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderWidth: "2px",
            },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "85px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: "inline-block",
          marginBottom: "5px",
          color: "#333",
        },
      },
    },
  },
});
export default theme;
