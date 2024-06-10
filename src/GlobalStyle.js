import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background: ${({ theme }) => theme.colors.site.background};
  color: ${({ theme }) => theme.colors.site.text};
  font-family: "Inter", sans-serif;
  word-break: break-word;
  letter-spacing: 0,05em;
}
`;
