import styled from "styled-components";

const TBD = () => {
  return (
    <Container>
      <Placeholder src="/images/TBD-placeholder.png" />
    </Container>
  );
};

export default TBD;

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
