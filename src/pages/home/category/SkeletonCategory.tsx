import Skeleton from 'react-loading-skeleton';

export const SkeletonCategory = () => {
  return (
    <div>
      <Skeleton className="relative -top-[4px] h-60 w-full" />
      <Skeleton className="my-1 h-[32px]" />
    </div>
  );
};
