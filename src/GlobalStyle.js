import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background: ${({ theme }) => theme.color.iron};
  padding: 16px;
  font-family: "Inter", sans-serif;
}
`;
