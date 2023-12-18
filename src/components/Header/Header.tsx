import { Link } from 'react-router-dom';
import { Container } from '@/components/Container';

export const Header = () => {
  return (
    <header>
      <Container>
        <Link to="/">
          <img src={require('./logo.png')} alt="Keychrone keyboards" />
        </Link>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/shop'}>Shop</Link>
          </li>
          <li>
            <Link to={'/shop131'}>404</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};
