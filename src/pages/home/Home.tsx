import { Container } from '@/components/Container';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

type CategoryType = {
  name: string;
  img: string;
  link: string;
};

const categories: CategoryType[] = [
  {
    name: 'Q Pro Series',
    img: require('./categoryImages/q1-pro.webp'),
    link: '/q-pro-series',
  },
  {
    name: 'Q Series',
    img: require('./categoryImages/q2.webp'),
    link: '/q-series',
  },
  {
    name: 'K Pro Series',
    img: require('./categoryImages/k17-pro.webp'),
    link: '/k-pro-series',
  },
  {
    name: 'K Series',
    img: require('./categoryImages/k3.webp'),
    link: '/k-series',
  },
  {
    name: 'V Series',
    img: require('./categoryImages/v.webp'),
    link: '/v-series',
  },
  {
    name: 'C Series',
    img: require('./categoryImages/c.webp'),
    link: '/c-series',
  },
  {
    name: 'Cherry Switches',
    img: require('./categoryImages/cherry-switchers.webp'),
    link: '/cherry-switches',
  },
  {
    name: 'Keychron Switches',
    img: require('./categoryImages/keychron-switches.webp'),
    link: '/keychron-switches',
  },
  {
    name: 'Low Profile Switches',
    img: require('./categoryImages/low-profile-switches.webp'),
    link: '/low-profile-switches',
  },
];

const Home = () => {
  return (
    <Suspense fallback={<div>Skeleton ...</div>}>
      <Container>
        <div className="grid grid-cols-3 gap-8">
          {categories.map((category) => (
            <Category key={category.name} {...category} />
          ))}
        </div>
      </Container>
    </Suspense>
  );
};

export default Home;

const Category = ({ name, img, link }: CategoryType) => (
  <Link to={link} className="category group">
    <div className="relative h-60 overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.3)]">
      <img
        src={img}
        alt={name}
        className="absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2  object-cover object-center transition-all duration-300 group-hover:h-[110%] group-hover:w-[110%]"
      />
    </div>

    <span className="my-1.5 block text-center text-2xl font-medium">{name}</span>
  </Link>
);
