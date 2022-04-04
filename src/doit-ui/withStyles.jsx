import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from "./Theme";

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(Theme);

export default { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
