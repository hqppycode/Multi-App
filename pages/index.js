import Head from "next/head";
import Weather from "../components/Weather";
import styled from "styled-components";
// import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Multi-App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Weather />
      <Weather />
      <Weather />
      <Weather />
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;

export default Home;
