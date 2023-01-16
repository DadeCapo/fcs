import { createTheme } from "@mui/material/styles";
import colors from "./colors";
import globalStyles from "./global";
const coloring = {
  primaryMain: colors.cashCash,
  primarySecond: colors.luckyClover,
  primaryThird: colors.dollarBills,
  secondaryMain: colors.profitLossFloss,
  secondarySecond: colors.swipeHype,
  secondaryThird: colors.hoverGreen,
  errorMain: colors.errorRed,
  paper: colors.pureWhite,
  default: colors.steelsAndDeals,
  defaultGrey: colors.greyPay,
  darker: colors.platinumCard,
  text: colors.fiftyShadesOfPay,
  lightText: colors.fiftyPaysLighter,
  border: colors.dankBank,
  shadow: colors.sliverOfSilver,
};

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins','Open Sans', sans-serif ",
    fontWeight: "400",

    fontSize: 20,
    button: {
      color: "white",
    },
  },
  palette: {
    type: "light",
    primary: {
      main: coloring.primaryMain, // #05C806
      second: coloring.primarySecond, //#00A706
      third: coloring.primaryThird, //#1B8A28
    },
    secondary: {
      main: coloring.secondaryMain, //#002E3D
      second: coloring.secondarySecond, //#03aadd
      third: coloring.secondaryThird, // #027ca1
    },
    error: {
      main: coloring.errorMain, // #B80012
    },
    background: {
      paper: coloring.paper, //#FFFFFF
      default: coloring.default, //#f5f6f8
      defaultGrey: coloring.defaultGrey, //"#E4E8EC"
      darker: coloring.darker, //#DEDEDE
      shadow: coloring.shadow, //#C2C2C2
    },

    text: {
      primary: coloring.text, // #5C5C5C
      lightText: coloring.lightText, // #8D8D8D
      border: coloring.border, //#a5a5a5
      action: coloring.secondarySecond, // #03aadd
      actionHover: coloring.secondaryThird, // #F2fcf2
    },
    colorLibrary: {
      ...colors,
    },
  },
  components: globalStyles(coloring),
});

export default theme;
