import { useState } from 'react';
import Pagination from '../components/Pagination';
import Pokemon from '../components/Pokemon';
import Modal from '../components/Modal';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 120rem;
  width: 95%;
  margin: 0 auto 5rem auto;

  @media (min-width: 1920px) {
    max-width: 170rem;
  }
`;

const ListPokemons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

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

const SpinnerLoading = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = ({
  loading,
  pageResults,
  currentPage,
  hasNextPage,
  hasPrevPage,
  nextPage,
  backPage,
}) => {
  const [infoToModal, setInfoToModal] = useState({});
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Pagination
        {...{ currentPage, hasNextPage, hasPrevPage, nextPage, backPage }}
      />

      {loading ? (
        <SpinnerLoading>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </SpinnerLoading>
      ) : (
        <ListPokemons>
          {pageResults.map(([id, data]) => (
            <Pokemon
              key={id}
              data={data}
              setInfoToModal={setInfoToModal}
              setShowModal={setShowModal}
            />
          ))}
        </ListPokemons>
      )}

      <Modal
        infoToModal={infoToModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Container>
  );
};

export default Grid;
