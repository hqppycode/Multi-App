import styled from "styled-components";

const Favorites = () => {
  return (
    <Container>
      <Fav href="http://thejigsawpuzzles.com/">
        <Placeholder src="/images/12341234.png" />
      </Fav>
      <Fav href="https://www.agame.com/game/ono-card-game">
        <Placeholder src="/images/ono.jpeg" />
      </Fav>
      <Fav href="https://www.icardgames.com/">
        <Placeholder src="/images/cards2.png" />
      </Fav>
      <Fav href="http://www.youtube.com/">
        <Placeholder src="/images/youtube.jpg" />
      </Fav>
      <Fav href="http://www.facebook.com/">
        <PlaceholderLast src="/images/Facebook-Logo.png" />
      </Fav>
    </Container>
  );
};

export default Favorites;

// Styles
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Placeholder = styled.img`
  height: 78%;
  display: block;
  margin-right: 1rem;
`;

const PlaceholderLast = styled.img`
  height: 78%;
  display: block;
`;

const Fav = styled.a`
  height: 100px;
`;
