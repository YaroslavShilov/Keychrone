import { Outlet } from 'react-router-dom';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header/Header';

export const PageTemplate = () => {
  return (
    <div className="relative bg-white pt-[80px]">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
