import './style.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from '@/routes/routes';

const rootElement = document.getElementById('root') as Element;

if (!rootElement) {
  throw new Error('root not found');
}

const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>,
);
