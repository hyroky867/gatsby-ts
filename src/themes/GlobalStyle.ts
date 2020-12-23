import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background-color: var(--bg-color);
  --font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', 'Hiragino Sans', 'ヒラギノ角ゴシック', sans-serif;
  /* main font size */
  --title-size: 24px;
  --section-title-size: 26px;
  --page-title-size: 24px;
  --normal-size: 16px;
  --small-size: 12px;
  /* blog font size */
  --blog-h1-size: 32px;
  --blog-h2-size: 24px;
  --blog-h3-size: 20px;
  --blog-h4-size: 16px;
  --blog-h5-size: 16px;
}
/* @media (perfers-color-scheme: dark) {
  :root {
    --bg-color: #FAFAFA;
    --logo-color: #616161;
    --title-color: #424242;
    --text-color: #616161;
    --sub-text-color: #757575;
  }
} */
/* @media (perfers-color-scheme: light) { */
  :root {
    --bg-color: #212121;
    --logo-color: #BDBDBD;
    --title-color: #F5F5F5;
    --text-color: #BDBDBD;
    --sub-text-color: #9E9E9E;
  }
/* } */
body {
  --bg-color: #FAFAFA;
  --logo-color: #616161;
  --title-color: #424242;
  --text-color: #616161;
  --sub-text-color: #757575;
}
body.dark {
  --bg-color: #212121;
  --logo-color: #BDBDBD;
  --title-color: #F5F5F5;
  --text-color: #BDBDBD;
  --sub-text-color: #9E9E9E;
}
/* syntax highlight */
body {

}
`;

export { GlobalStyle };
