// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  components: {
    Text: {
      baseStyle: (props: Record<string, any>) => ({
        color: props.colorMode === "dark" ? "grey" : "black",
      }),
    },
  },
});

export default theme;
