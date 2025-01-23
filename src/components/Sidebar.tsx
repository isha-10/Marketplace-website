// src/components/sidebar/Sidebar.tsx
import React from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

// Sidebar Component
const Sidebar: React.FC = () => {
  // Data for posts, menu items, gallery images, and social links
  const posts = [
    { date: "June 22, 2020", description: "Lorem ipsum dolor sit cing elit, sed do.", image: "/image1.jpg" },
    { date: "June 22, 2020", description: "Lorem ipsum dolor sit cing elit, sed do.", image: "/image2.jpg" },
    { date: "June 22, 2020", description: "Lorem ipsum dolor sit cing elit, sed do.", image: "/choose6.png" },
    { date: "June 22, 2020", description: "Lorem ipsum dolor sit cing elit, sed do.", image: "/menu4.png" },
  ];

  const menuItems = [
    { name: "Chicken Fry", count: 26, image: "/chicken-fry.jpg" },
    { name: "Burger Food", count: 46, image: "/burger-food.jpg" },
    { name: "Pizza", count: 16, image: "/pizza.jpg" },
    { name: "Fresh Fruits", count: 36, image: "/fresh-fruit.jpg" },
    { name: "Vegetables", count: 16, image: "/aboutUS3.png" },
  ];
  const tags = [
    'Sandwich', 'Tikka', 'Bbq', 'Restaurant', 'Chicken Sharma',
    'Health', 'Fastfood', 'Food', 'Pizza', 'Burger', 'Chicken'
  ];
  

  const galleryImages = [
    { src: "/pizza.jpg", alt: "Delicious pizza with toppings" },
    { src: "/menu6.png", alt: "Gourmet dish presentation" },
    { src: "/aboutUS1.png", alt: "Grilled salmon with vegetables" },
    { src: "/chicken-fry.jpg", alt: "BBQ platter with sides" },
    { src: "/aboutUS2.png", alt: "Appetizer plate" },
    { src: "/cupcake.png", alt: "French toast with fruits" },
  ];

  const socialLinks = [
    { icon: <FaTwitter className="w-6 h-6" />, url: "#", platform: "Twitter" },
    { icon: <FaYoutube className="w-6 h-6" />, url: "#", platform: "YouTube" },
    { icon: <FaPinterest className="w-6 h-6" />, url: "#", platform: "Pinterest" },
    { icon: <FaInstagram className="w-6 h-6" />, url: "#", platform: "Instagram" },
    { icon: <FaFacebook className="w-6 h-6" />, url: "#", platform: "Facebook" },
  ];

  return (
    <aside className="space-y-8">
      {/* Search */}
              <div className="mb-8">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search Product"
                    className="flex-1 border p-2 rounded-l focus:outline-none"
                    spellCheck={false}
                    data-ms-editor= "true"
                  />
                  <button className="bg-orange-500 text-white px-4 rounded-r">
                  <CiSearch />
                  </button>
                </div>
              </div>
      
      {/* Profile Card */}
      <div className="bg-white text-black text-center p-6 rounded-lg w-80 mx-auto shadow-sm">
        <Image
          src="/profileGuy.png"
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full mx-auto object-cover"
        />
        <h2 className="mt-4 text-xl font-semibold">Prince Miyako</h2>
        <p className="text-gray-400">Blogger/Photographer</p>
        <div className="flex justify-center items-center mt-2">
          <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
          <span className="ml-2 text-gray-400">(1 Review)</span>
        </div>
        <p className="text-sm mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaPinterest />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white text-black p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Post</h2>
        {posts.map((post, index) => (
          <div key={index} className="flex items-center mb-4">
            <Image
              src={post.image}
              alt={`Post ${index + 1}`}
              width={64}
              height={64}
              className="rounded-md object-cover mr-4"
            />
            <div>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="text-sm">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter By Menu */}
      <div className="bg-white text-black p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Filter By Menu</h2>
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-md object-cover mr-4"
              />
              <p className="text-gray-400">{item.name}</p>
            </div>
            <p className="text-gray-400">{item.count}</p>
          </div>
        ))}
      </div>

      {/*popular Tags*/}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-2xl font-semibold mb-4">Popular Tags</h2>
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <Link
            href={`/blog/tag/${tag.toLowerCase()}`}
            key={tag}
            className="px-4 py-2 border space- border-gray-200 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>

      {/* Photo Gallery */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                width={150}
                height={150}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Social Follow */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              className="p-2 hover:text-primary transition-colors hover:bg-orange-500 rounded-lg"
              aria-label={`Follow us on ${social.platform}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
