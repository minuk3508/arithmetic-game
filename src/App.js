import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import ArithmeticPage from "./Pages/ArithmeticPage";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@300;400;700;900&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 400;
  font-family: 'Alfa Slab One', cursive;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 8vh;
  font-weight: 700;
  font-size: 1.5rem;
  color: #707070;
  background-color: #f2f2f2;
`;

const ContentBox = styled.section`
  @media screen and (max-width: 767px) {
    height: auto;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 75vh;
`;
const Footer = styled.footer`
  @media screen and (max-width: 767px) {
    height: 9vw;
  }
  width: 100vw;
  height: 17vh;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>암산 테스트</Title>
        <ContentBox>
          <ArithmeticPage />
        </ContentBox>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
