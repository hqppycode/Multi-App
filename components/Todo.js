import styled from "styled-components";

const Todo = () => {
  return (
    <Container>
      <Placeholder src="/images/todo-placeholder.png" />
    </Container>
  );
};

export default Todo;

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #999;
`;

const Placeholder = styled.img`
  width: 50%;
  display: block;
`;
