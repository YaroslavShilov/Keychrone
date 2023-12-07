import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { App } from './components/App';

const rootElement = document.getElementById('root') as Element;

if (!rootElement) {
  throw new Error('root not found');
}

const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Link to="/">404, go home</Link>,
  },
]);

root.render(<RouterProvider router={router} />);
