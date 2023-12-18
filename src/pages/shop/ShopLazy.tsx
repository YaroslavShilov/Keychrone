import { lazy, Suspense } from 'react';
const Shop = lazy(() => import(/* webpackChunkName: 'ShopPage' */ './Shop'));

export const ShopLazy = () => {
  return (
    <Suspense fallback={'shop loading'}>
      <Shop />
    </Suspense>
  );
};
