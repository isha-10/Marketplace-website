'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BiComment } from 'react-icons/bi'
import { Great_Vibes } from 'next/font/google';
import { client } from '@/sanity/lib/client';

import Link from 'next/link';
const greatVibes = Great_Vibes({
  weight: '400', // Default weight
  subsets: ['latin'], // Choose character set
});

interface Blog {
  heading: string;
  _createdAt: string;
  imageUrl: string;
  slug: {
    current: string;
  };
}

async function fetchBlogs() {
  const query = `*[_type == "blog"][0..2] {
    heading,
    _createdAt,
    "imageUrl": image1.asset->url,
    slug
  }`;
  const blogs: Blog[] = await client.fetch(query);
  return blogs;
}

const BlogPost = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error loading blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadBlogs();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className={`${greatVibes.className} text-[#FF9F0D] text-3xl mb-4`}>
            Blog Post
          </h3>
          <h2 className="text-[#FF9F0D] text-6xl font-bold">
            La<span className="text-white">test News & Blog</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <div key={index} className="group cursor-pointer border-2 border-white">
              <Link href={`/blog/${post.slug.current}`}>
              {/* Image Container */}
              <div className="relative h-[300px] mb-6 overflow-hidden rounded-lg">
                {post.imageUrl ? (
                    <Image
                    src={post.imageUrl}
                    alt={post.heading}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  // Fallback image
                  <Image
                    src="/choose1.png"  // Add a placeholder image to your public folder
                    alt="Placeholder"
                    width={800}
                    height={300}
                    className="object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-[#FF9F0D]">
                  <span>{new Date(post._createdAt).toLocaleDateString()}</span>
                  <div className="flex items-center gap-2">
                    <BiComment />
                    <span>3</span>
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold group-hover:text-[#FF9F0D] transition-colors">
                  {post.heading}
                </h3>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPost 
