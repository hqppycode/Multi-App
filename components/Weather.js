import styled from "styled-components";

const Weather = () => {
  return (
    <Container>
      <Placeholder src="/images/sun-placeholder.png" />
    </Container>
  );
};

export default Weather;

const Container = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Placeholder = styled.img`
  width: 100%;
  display: block;
`;
