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
  color: ${({ theme }) => theme.color.mineshaft};
  font-family: "Inter", sans-serif;
  word-break: break-word;
  letter-spacing: 0,05em;
}
`;
