import Head from "next/head";
import styled from "styled-components";

// Components
import Weather from "../components/Weather";
import TodoList from "../components/TodoList";
import Favorites from "../components/Favorites";
import Pictures from "../components/Pictures";

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Rick | Home</title>
        <link rel="icon" href="/images/fav.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <W>
        <Weather />
      </W>
      <T>
        <Pictures />
      </T>
      <F>
        <Favorites />
      </F>
      <P>
        <TodoList />
      </P>
    </Wrapper>
  );
};

// Styles
// const Wrapper = styled.div`
//   /* width: 95%;
//   height: 100vh;
//   border: 1px solid red; */
//   width: 1350px;
//   height: 730px;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   margin: 0 auto;
// `;

export default Home;

const Wrapper = styled.div`
  width: 1350px;
  height: 730px;
  margin: 0.5rem auto 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 160px 1fr 120px;
  grid-template-areas:
    "w t t t"
    "p t t t"
    "p f f f";
`;
const W = styled.div`
  grid-area: w;
`;

const P = styled.div`
  grid-area: p;
`;

const F = styled.div`
  grid-area: f;
  align-self: center;
`;
const T = styled.div`
  grid-area: t;
`;
