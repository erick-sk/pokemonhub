import styled from 'styled-components';

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;

const Button = styled.div`
  width: 10rem;
  height: 3.1rem;
  padding: 0.5rem;
  background-color: var(--white-color);
  text-align: center;
  font-weight: var(--font-bold);
  color: var(--btn-color);
  border: 2px solid var(--btn-color);
  border-radius: 2rem;
  transition: background-color 1s ease;

  &:hover {
    background-color: var(--btn-hover-color);
    cursor: pointer;
  }

  ${(props) => props.disabled && 'visibility: hidden'};
`;

const PageNumber = styled.span`
  width: 4rem;
  height: 3.1rem;
  margin: 0 2rem;
  background-color: var(--white-color);
  color: var(--btn-color);
  font-weight: var(--font-bold);
  text-align: center;
  line-height: 1.7;
  border: 2px solid var(--btn-color);
  border-radius: 2rem;
`;

const Pagination = ({
  currentPage,
  hasNextPage,
  hasPrevPage,
  nextPage,
  backPage,
}) => {
  return (
    <ContainerButtons>
      <Button disabled={!hasPrevPage} onClick={() => backPage()}>
        BACK
      </Button>

      <PageNumber>{currentPage}</PageNumber>

      <Button disabled={!hasNextPage} onClick={() => nextPage()}>
        NEXT
      </Button>
    </ContainerButtons>
  );
};

export default Pagination;
