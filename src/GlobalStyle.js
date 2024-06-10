import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background: ${({ theme }) => theme.color.whiteLilac};
  font-family: "Inter", sans-serif;
  word-break: "break-word";
}
`;
