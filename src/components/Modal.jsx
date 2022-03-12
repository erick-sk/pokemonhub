import styled from 'styled-components';
import { generateID } from '../helpers/generateId';

const ViewModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 40rem;
  background-color: var(--white-color);
  border-radius: 2rem;
  border: 2px solid var(--btn-color);
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-transform: capitalize;
  color: var(--text-color);
`;

const P = styled.p`
  font-weight: var(--font-bold);
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const Span = styled.span`
  font-weight: var(--font-regular);
  color: var(--text-color);
`;

const Button = styled.div`
  align-self: center;
  width: 10rem;
  height: 3.1rem;
  padding: 0.5rem;
  margin-top: 2.5rem;
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
`;

const Modal = ({ infoToModal, showModal, setShowModal }) => {
  const { height, weight, name, types, order, abilities } = infoToModal;

  return (
    <>
      {showModal ? (
        <ViewModal onClick={() => setShowModal(false)}>
          <Container>
            <Title>{name}</Title>
            <P>
              Order: <Span>#{order}</Span>
            </P>
            <P>
              Height: <Span>{height / 10}m</Span>
            </P>
            <P>
              Weight: <Span>{weight / 10}kg</Span>
            </P>
            <P>Abilities:</P>
            <ul>
              {abilities.map((ability) => (
                <li key={generateID()}>{ability.ability.name}</li>
              ))}
            </ul>
            <P>Attacks:</P>
            <ul>
              {types.map((type) => (
                <li key={generateID()}>{type.type.name}</li>
              ))}
            </ul>
            <Button onClick={() => setShowModal(false)}>CLOSE</Button>
          </Container>
        </ViewModal>
      ) : null}
    </>
  );
};

export default Modal;
