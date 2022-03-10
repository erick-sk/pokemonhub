import styled from 'styled-components';

const Container = styled.div`
  max-width: 120rem;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 1920px) {
    max-width: 170rem;
  }
`;

const ListPokemons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Grid = () => {
  return (
    <Container>
      <ListPokemons>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
      </ListPokemons>
    </Container>
  );
};

export default Grid;
