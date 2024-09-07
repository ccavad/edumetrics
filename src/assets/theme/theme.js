import { extendTheme } from "@chakra-ui/react";
// import "@fontsource-variable/open-sans";
// import "@fontsource-variable/raleway";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // padding: "1rem",
      },
      // reset default chakra styling
      ".chakra-select__wrapper": {
        marginLeft: "-1em",
      },
      ".chakra-input__group": {
        marginLeft: "-1em",
      },
    },
  },
  fonts: {
    // heading: `'Open Sans', sans-serif`,
    // body: `'Raleway', sans-serif`,
  },
});

export default theme;
