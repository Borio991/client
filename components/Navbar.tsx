import getCategories from '@/actions/get-cateories';
import MainNav from '@/components/MainNav';
import NavbarActions from '@/components/NavbarActions';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import React from 'react';

async function Navbar() {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center lg:gap-x-8">
          <Link href="/" className="ml-4 lg:ml-0 ">
            <h1 className="font-bold text-xl ">German Store</h1>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
