import { Route, Routes } from 'react-router-dom';
import { HomeLazy } from '@/pages/home/HomeLazy';
import { PageTemplate } from '@/pages/PageTemplate';
import { ShopLazy } from '@/pages/shop/ShopLazy';
import { Page404 } from '@/pages/Page404';

export const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<PageTemplate />}>
      <Route index element={<HomeLazy />} />
      <Route path="shop" element={<ShopLazy />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  </Routes>
);
