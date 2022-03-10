import PokemonLogo from '../images/pokemon-logo.png';
import styled from 'styled-components';

const Div = styled.div`
  background-color: var(--nav-color);
  padding: 0.2rem 0;
  display: flex;
  justify-content: center;
`;

const NavBar = () => {
  return (
    <Div>
      <nav>
        <a href="/">
          <img src={PokemonLogo} alt="pokemon-logo" />
        </a>
      </nav>
    </Div>
  );
};

export default NavBar;
