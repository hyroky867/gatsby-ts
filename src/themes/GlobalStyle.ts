import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

body {
  --font-family: "Open Sans", "Hiragino Kaku Gothic ProN", Meiryo, Helvetica, Arial, sans-serif;
  /* main font size */
  --site-title: 32px;
  --title-size: 1.625em;
  --section-title-size: 26px;
  --page-title-size: 24px;
  --normal-size: 16px;
  --content-text-size: 17px;
  --small-size: 12px;
  /* blog font size */
  --blog-h1-size: 32px;
  --blog-h2-size: 24px;
  --blog-h3-size: 20px;
  --blog-h4-size: 16px;
  --blog-h5-size: 16px;
  /* width size */
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
  background-color: var(--bg-color);
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
  p {
    font-size: var(----content-text-size);
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export { GlobalStyle };
