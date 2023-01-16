const globalStyles = (coloring) => {
  const overrides = {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          padding: "0",
          margin: "0",
          boxSizing: "border-box",
          webkitTapHighlightColor: "transparent",
        },
        "*:focus, *:active": {
          outline: "none !important",
        },
        "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus":
          {
            border: "none !important",
          },
        html: {
          fontSize: "62.5%",
          // scrollBehavior: "smooth",
          // overflow: "overlay",
          // marginLeft: "calc(100vw - 100%)",
        },
        "@media only screen and (max-width: 1350px)": {
          html: {
            fontSize: "54.25%",
          },
        },
        "@media only screen and (max-width: 1142px)": {
          html: {
            fontSize: "48%",
            // overflowY: "scroll !important",
          },
        },
        "@media only screen and (max-width: 900px)": {
          html: {
            fontSize: "38%",
          },
        },
        "@media only screen and (max-width: 750px)": {
          html: {
            fontSize: "34%",
          },
        },
        "@media only screen and (max-width: 600px)": {
          html: {
            fontSize: "62.5%",
          },
        },
        body: {
          fontFamily: '"Poppins" "Open Sans", sans-serif',
          webkitFontSmoothing: "antialiased",
          // color: "transparent",
          height: "100vh",
          // position: "absolute",
          overflowY: "overlay",
          overflowX: "hidden",

          width: "auto",
          // overflow: "inherit",
          // left: "-7px",
          paddingRight: "0 !important",
          // position: "fixed",
        },
        ".css-mvmu1r > div .Mui-selected ": {
          color: "#FFF !important",
          backgroundColor: coloring.primaryMain,
        },
        ".css-1oq4u11-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected":
          {
            backgroundColor: `${coloring.primaryMain} !important`,
          },
        ".css-tyr054-MuiFormLabel-root.Mui-focused": {
          color: `${coloring.text} !important`,
        },
        ".css-1frxz93-MuiButtonBase-root-MuiRadio-root": {
          padding: "9px 9px 0 9px !important",
        },
        ".css-1nncubp-MuiButtonBase-root-MuiCheckbox-root": {
          padding: "0 !important",
          margin: "9px !important",
        },
        // ".css-j204z7-MuiFormControlLabel-root": {
        //   alignItems: " !important",
        // },
        ".css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root .css-1559ijc-MuiBackdrop-root-MuiModal-backdrop":
          {
            opacity: "0 !important",
          },
        "a, a:link, a:visited": {
          // color: coloring.text,
          textDecoration: "none",
        },
        "a:hover": {
          color: coloring.primaryMain,
        },
        "a:focus, a:active": {
          outline: "none",
        },
        "::-moz-selection": {
          backgroundColor: coloring.primaryMain,
          color: "transparent",
        },
        "::selection": {
          backgroundColor: coloring.primaryMain,
          color: coloring.paper,
        },
        "*::-webkit-scrollbar-track": {
          borderRadius: "4px",
          backgroundColor: "transparent",
          position: "fixed",
        },
        "*::-webkit-scrollbar": {
          width: "5px",
          backgroundColor: "transparent",
          position: "fixed",
        },
        "body::-webkit-scrollbar": {
          width: "7px",
          backgroundColor: "transparent",
          position: "fixed",
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "10px",
          backgroundColor: coloring.darker,
        },
        "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus":
          {
            border: "1px solid green",
            webkitTextFillColor: "green",
            webkitBoxShadow: "0 0 0px 1000px #000 inset !important",
            transition: "background-color 5000s ease-in-out 0s",
          },
        "input[type=number]": {
          "-moz-appearance": "textfield",
        },
        "input::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "input::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "#root": {
          height: "100%",
        },
        "input::placeholder": {
          color: "#red !important",
        },
        ".sizingClass": {
          width: "auto ",
          height: "auto ",
        },
        ".rec.rec-item-wrapper": {
          justifyContent: "flex-start",
        },
        ".MuiDataGrid-columnsContainer": {
          fontSize: "1.4rem",
        },

        // overrides for v5 datagridpro
        // sorry this is dirty its what had to be done to get the context menu since the v5 doesnt connect to the theme
        ".MuiDataGrid-root": {
          border: "none !important",
        },
        // ".Mui-checked": {
        //   color: "#05C806 !important",
        // },
        ".css-1miuj5f-MuiDataGrid-panelWrapper": {
          maxHeight: "160px",
          overflowY: "overlay",
        },
        ".css-4rdffl-MuiDataGrid-panelFooter": {
          borderTop: `1px solid ${coloring.border}`,
        },
        ".css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
          color: "#05C806 !important",
        },
        ".css-1e6y48t-MuiButtonBase-root-MuiButton-root:hover": {
          backgroundColor: "#05C80610 !important",
        },
        ".MuiCheckbox-root:hover": {
          backgroundColor: "#05C80610 !important",
        },
        ".MuiDataGrid-row.Mui-selected": {
          backgroundColor: "#05C80615 !important",
        },
        ".MuiDataGrid-cell:focus-within": {
          outline: "none !important",
        },
        ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
          fontSize: "1.6rem !important",
          fontFamily: "Poppins !important",
        },
        ".css-1480iag-MuiInputBase-root-MuiInput-root": {
          fontSize: "1.2rem !important",
          fontFamily: "Poppins !important",
        },
        ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
          color: "#05C806 !important",
        },
        ".css-1480iag-MuiInputBase-root-MuiInput-root:after": {
          borderBottom: "2px solid #05C806 !important",
        },
        ".css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
          fontSize: "1.4rem !important",
        },
        ".MuiDataGrid-row": {
          backgroundColor: coloring.paper,
        },
        ".MuiDataGrid-rowCount": {
          fontSize: "1.5rem",
        },

        // '.MuiDataGrid-window': {
        // 	overflowX: 'hidden !important',
        // },
        ".MuiDataGrid-colCellMoving": {
          backgroundColor: "rgba(0,0,0,0) !important",
        },
        ".Mui-disabled": {
          "& > .MuiButton-label": {
            color: coloring.disabled,
          },
        },

        //? disabled buttons cursor

        ".MuiButtonBase-root:disabled": {
          cursor: "not-allowed",
          pointerEvents: "auto",
        },
        ".MuiDataGrid-cell": {
          paddingLeft: "1.6rem !important",
          fontSize: "1.5rem",
        },
        ".MuiDataGrid-cellCheckbox": {
          paddingLeft: "0 !important",
        },
        ".MuiDataGrid-colCell": {
          padding: "0px !important",
        },
        ".MuiDataGrid-colCellTitle": {
          paddingLeft: "2.4rem",
          fontSize: "1.6rem",
        },
        ".MuiTabs-indicator": {
          height: "4px !important",
          boxShadow: "0 -2px 6px 0 rgba(5, 200, 6, 0.22) !important",
        },
        "input: -internal-autofill-selected": {
          backgroundColor: `${coloring.text} !important`,
        },
        ".jodit-container": {
          border: `none !important`,
          display: "flex",
          flexDirection: "column-reverse",
        },
        ".jodit-workplace": {
          border: `1px solid ${coloring.border} !important`,
          borderRadius: "4px",
          marginBottom: "4px",
        },
        ".jodit-toolbar__box:not(:empty)": {
          border: `none !important`,
          backgroundColor: `${coloring.paper} !important`,
        },
        ".jodit-editor__resize": {
          display: "none",
        },
        ".jodit-toolbar-button": {
          margin: "0 !important",
        },
        ".notranslate": {
          display: "none !important",
        },
      },
    },
    MuiPickersBasePicker: {
      styleOverrides: {
        container: {},
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0 !important",
          margin: "9px !important",
          color: "white ",
          backgroundColor: "white",
          borderRadius: "3px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          alignItems: "center",
        },
      },
    },
    MuiPickersToolbar: {
      styleOverrides: {
        toolbar: {
          display: "none",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        day: {
          "&:hover": {
            borderRadius: "6px",
          },
        },
        daySelected: {
          borderRadius: "6px",
          color: coloring.paper,
        },
      },
    },
    MuiDataGridPanel: {
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
    MuiGridPanelContent: {
      styleOverrides: {
        root: {
          maxHeight: "130px",
          overflowY: "scroll",
        },
      },
    },
    MuiGridPanelFooter: {
      styleOverrides: {
        root: {
          borderTop: `1px solid ${coloring.border}`,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "none",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {},
        elevation1: {
          boxShadow: "none",
        },
        rounded: {
          borderRadius: "0",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          fontWeight: 500,
          transition: "all .2s ease",

          "&:hover": {
            color: coloring.primaryMain,
          },

          "&$selected": {
            backgroundColor: coloring.paper,
            color: coloring.primaryMain,
            transition: "all .1s ease",

            "&:hover": {
              backgroundColor: coloring.paper,
              color: coloring.primaryMain,
            },
          },
        },
        button: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          padding: "0px",
        },
        cell: {
          borderBottom: "none",
          padding: "0px !important",
        },
        columnsContainer: {
          borderBottom: "none",
        },
        row: {
          backgroundColor: coloring.paper,
          margin: "0",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "1.5rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBottom: ".5rem",
          marginLeft: ".1rem",
          color: coloring.text,
          fontWeight: "500",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {},
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontFamily: "Poppins",
          // minWidth: "150px",
        },
        contained: {
          fontSize: "13px",
          padding: "1.2rem 3.2rem",
          width: "fit-content",
          height: "43px",
          borderRadius: ".6rem",
          boxShadow: "none",
          color: "#fff",
          fontWeight: "500",
        },
        text: {
          fontSize: "13px",
        },
        outlined: {
          fontSize: "13px",
          padding: "1.2rem 3.2rem",
          width: "fit-content",
          borderRadius: ".6rem",
          fontWeight: "500",
          border: "1px solid #05c806",
          "&:hover": {
            borderWidth: "1px",
            boxShadow:
              "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        //
        root: {},
        input: {
          fontSize: "16px",
          color: coloring.secondaryMain,
          lineHeight: "22px",
          margin: 0,
          padding: " 1.6rem !important",
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          boxShadow: "0 0 .2rem #00000023",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
          fontSize: "1.3rem",
          color: coloring.text,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        actions: {
          color: coloring.text,
          "& > button > *": {
            color: coloring.text,
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(20, 20, 20, 0.4)",
          backdropFilter: "blur(1px)",
          transition: "all .2s ease",
        },
      },
    },
  };

  return { ...overrides };
};
export default globalStyles;
