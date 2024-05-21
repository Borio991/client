'use client';
import CartItem from '@/components/CartItem';
import Summary from '@/components/Summary';
import Container from '@/components/ui/Container';
import useCart from '@/hooks/use-cart';
import React, { useEffect, useState } from 'react';

function CartPage() {
  const { items } = useCart();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 ">
            <div className="lg:col-span-7">
              {items?.length === 0 && <p>No items added to your Cart</p>}
              <ul>
                {items?.map((item) => (
                  <CartItem data={item} key={item.id} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartPage;
