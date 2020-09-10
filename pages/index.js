import Head from "next/head";
import styled from "styled-components";

// Components
import Weather from "../components/Weather";
import Todo from "../components/Todo";
import Favorites from "../components/Favorites";
import TBD from "../components/TBD";

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Multi-App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Weather />
      <Todo />
      <Favorites />
      <TBD />
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  max-width: 900px;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;

export default Home;
