import { css } from "@emotion/react";

const global = css`
  @font-face {
    font-family: "12LotteMartHappyMedium";
    font-style: normal;
    font-weight: 400;
    src: url("//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff2") format("woff2"),
      url("//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff") format("woff");
  }

  * {
    box-sizing: border-box;
    font-family: "Pretendard";
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
    background-color: #fff;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
  }

  .container {
    width: 768px;
    margin: 0 auto;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

export default global;
