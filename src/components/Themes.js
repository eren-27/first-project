import {createGlobalStyle} from "styled-components"

export const lightTheme = {
    body:"#fff",
    FontColor:"#000"
};

export const darkTheme = {
    body:"#000",
    FontColor:"#fff"
};

export const GlobalStyles = createGlobalStyle`

    body {
        background-color:${(props) => props.theme.body};
    }
`;