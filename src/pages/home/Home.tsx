import { Category } from './category/Category';

const categories = [
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
    <div className="grid grid-cols-3 gap-8">
      {categories.map((category) => (
        <Category key={category.name} {...category} />
      ))}
    </div>
  );
};

export default Home;
