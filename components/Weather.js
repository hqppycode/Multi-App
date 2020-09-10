import styled from "styled-components";

const Weather = () => {
  return (
    <Container>
      <Title>Weather</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50%;
  border: 2px solid rebeccapurple;
`;

const Title = styled.h1`
  color: red;
`;

export default Weather;
