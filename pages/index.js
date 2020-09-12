import Head from "next/head";
import styled from "styled-components";

// Components
// import Weather from "../components/Weather";
import Todo from "../components/Todo";
import Favorites from "../components/Favorites";
import TBD from "../components/TBD";

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Multi-App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </Head>

      <TBD />
      <Todo />
      <Favorites />
      <TBD />
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;

export default Home;
