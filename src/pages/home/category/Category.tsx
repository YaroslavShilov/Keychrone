import { Link } from 'react-router-dom';

type CategoryType = {
  name: string;
  img: string;
  link: string;
};

export const Category = ({ name, img, link }: CategoryType) => (
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
