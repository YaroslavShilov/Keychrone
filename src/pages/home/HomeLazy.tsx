import { lazy, Suspense } from 'react';
import { SkeletonCategory } from '@/pages/home/category/SkeletonCategory';
const Home = lazy(() => import(/* webpackChunkName: 'HomePage' */ './Home'));

export const HomeLazy = () => (
  <Suspense fallback={<HomeSkeleton />}>
    <Home />
  </Suspense>
);

const HomeSkeleton = () => (
  <div className="grid grid-cols-3 gap-8">
    <SkeletonCategory />
    <SkeletonCategory />
    <SkeletonCategory />
    <SkeletonCategory />
    <SkeletonCategory />
    <SkeletonCategory />
  </div>
);
