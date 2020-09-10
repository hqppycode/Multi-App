import styled from "styled-components";

const Favorites = () => {
  return (
    <Container>
      <Placeholder src="/images/favorites-placeholder.png" />
    </Container>
  );
};

export default Favorites;

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
