'use client';

import React from 'react';
import Image from 'next/image';
import Statistics from '@/components/Statistics';
import PageHeader from '@/components/PageHeader';


export default function Menu() {
  return (
    <div>
  
      <div className="bg-white min-h-screen flex flex-col items-center">
        {/* Header */}
       <PageHeader
       title="Our Menu"
       currentPage="Menu"
       />


        {/* Starter Menu */}
        <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 space-x-10 items-center">
          <Image
            src="/starter.png"
            alt="Starter Menu"
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Starter Menu</h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between ">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Alder Grilled Chinook Salmon</h3>
                  <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$32</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Berries and Creme Tart</h3>
                  <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-xs text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$43</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Tormentoso Bush Pizza Pintage</h3>
                  <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-xs text-gray-500">1000 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$14</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Spicy Vegan Potato Curry</h3>
                  <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$35</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Main Course */}
        <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 space-x-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Main Course</h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Optic Big Breakfast Combo Menu</h3>
                  <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$32</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Cashew Chicken With Stir-Fry</h3>
                  <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-xs text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$43</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Vegetables & Green Salad</h3>
                  <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-xs text-gray-500">1000 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$14</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Spicy Vegan Potato Curry</h3>
                  <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$35</span>
              </li>
            </ul>
          </div>
          <Image
            src="/maincourse.png"
            alt="Main Course"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </section>

        <Statistics />

        {/* Dessert */}
        <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 space-x-10 items-center">
          <Image
            src="/cupcake.png"
            alt="Dessert"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Dessert</h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Fig and Lemon Cake</h3>
                  <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$32</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Creamy Mascarpone Cake</h3>
                  <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-xs text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$43</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Pastry, Blueberries, Lemon Juice</h3>
                  <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-xs text-gray-500">1000 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$14</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Pain au Chocolat</h3>
                  <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$35</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Drinks */}
        <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 space-x-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Drinks</h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Caffè Macchiato</h3>
                  <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$32</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Aperol Spritz Cappuccino</h3>
                  <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-xs text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$43</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Caffè Latte Campuri</h3>
                  <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-xs text-gray-500">1000 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$14</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold hover:text-orange-500 ease-in-out duration-300">Tormentoso Bush Tea Pintage</h3>
                  <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$35</span>
              </li>
            </ul>
          </div>
          <Image
            src="/drink.png"
            alt="Drinks"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </section>
      </div>
        {/* Partners Section */}
<section className="py-12 bg-white text-black text-center">
  <h4 className="font-Inter text-base md:text-lg">Partners & Clients</h4>
  <h2 className="text-2xl md:text-4xl font-bold mb-8">We work with the best people</h2>
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 mb-5 items-center justify-center">
    <Image
      src="/partner1.png"
      alt="Partner 1"
      width={100}
      height={50}
      className="mx-auto"
    />
    <Image
      src="/partner2.png"
      alt="Partner 2"
      width={100}
      height={50}
      className="mx-auto"
    />
    <Image
      src="/partner3.png"
      alt="Partner 3"
      width={100}
      height={50}
      className="mx-auto"
    />
    <Image
      src="/partner4.png"
      alt="Partner 4"
      width={100}
      height={50}
      className="mx-auto"
    />
    <Image
      src="/partner5.png"
      alt="Partner 5"
      width={100}
      height={50}
      className="mx-auto"
    />
    <Image
      src="/partner6.png"
      alt="Partner 6"
      width={100}
      height={50}
      className="mx-auto"
    />
  </div>
</section>

    </div>
  );
} 