import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: rgb(164, 226, 139);
  background: linear-gradient(
    90deg,
    rgba(164, 226, 139, 1) 0%,
    rgba(101, 210, 153, 1) 35%,
    rgba(72, 205, 155, 1) 100%
  );
  border-radius: 2rem;
  box-shadow: 10px 10px 10px -1px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 10px 10px 10px -1px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 10px 10px 10px -1px rgba(0, 0, 0, 0.31);

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-weight: var(--font-black);
  font-size: var(--font-xl);
  text-transform: capitalize;
  color: var(--white-color);
`;

const Number = styled.span`
  color: var(--white-color);
  font-size: var(--font-lg);
  font-weight: var(--font-bold);
  margin-right: 1rem;
  align-self: flex-end;
`;

const Pokemon = ({ data, setInfoToModal, setShowModal }) => {
  return (
    <>
      <Item
        onClick={() => {
          setInfoToModal(data);
          setShowModal(true);
        }}
      >
        <Title>{data.name}</Title>

        <img
          src={data.sprites.other.home.front_default}
          width="250px"
          alt={data.name}
        />

        <Number>#{data.order}</Number>
      </Item>
    </>
  );
};

export default Pokemon;
