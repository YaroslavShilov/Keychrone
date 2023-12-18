import { Outlet } from 'react-router-dom';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header/Header';

export const PageTemplate = () => {
  return (
    <div className="py-10">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
