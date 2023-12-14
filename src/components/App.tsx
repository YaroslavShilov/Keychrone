import { Link, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import(/* webpackChunkName: 'HomePage' */ '@/pages/home/Home'));

export const App = () => {
  return (
    <div className="py-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <div>
              Page 404 <br /> <Link to="/">Go home</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
};
