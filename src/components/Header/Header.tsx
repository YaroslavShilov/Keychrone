import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { Container } from '../Container';

export const Header = () => {
  const [search, setSearch] = useState<string>('');

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log('sent search: ', search);
  };
  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <Container>
        <div className="flex h-[60px] flex-row items-center justify-center">
          <div className="flex w-full justify-between">
            <Link to="/">
              <img src={require('./logo.png')} alt="Keychrone keyboards" />
            </Link>
            <form className="relative max-w-[50%] flex-auto" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Search for products"
                value={search}
                onChange={searchHandler}
                className="h-11 w-full bg-gray-100 pl-5 pr-10"
              />
              <button
                className="absolute right-2 top-2.5 inline-block h-6 w-6 cursor-pointer text-gray-700 hover:text-black"
                type="submit"
              >
                <MagnifyingGlassIcon className="absolute inset-0 h-6 w-6" />
              </button>
            </form>
            <div className="flex items-center">
              <UserIcon className="mr-2 h-6 w-6 cursor-pointer text-gray-700 transition hover:text-black" />
              <ShoppingBagIcon className="h-6 w-6 cursor-pointer text-gray-700 transition hover:text-black" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
