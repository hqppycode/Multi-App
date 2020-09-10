import styled from "styled-components";

const Todo = () => {
  return (
    <Container>
      <Placeholder src="/images/todo-placeholder.png" />
    </Container>
  );
};

export default Todo;

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
