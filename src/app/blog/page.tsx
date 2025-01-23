
import { client } from "@/sanity/lib/client";
import { GoArrowUpRight } from "react-icons/go";

import Sidebar from "@/components/Sidebar";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

interface blog {
  heading:string;
  paragraph1:string;
  image1Url:string;
  slug: { current: string };

};

export default async function fetchblogs(){
  const query =`
  *[_type == "blog"]{
    "image1Url": image1.asset->url,
    heading,
    paragraph1,
    slug
  }
`;
  const blogs:blog[] = await client.fetch(query);

  return (
    <>
     <PageHeader title='Blog' currentPage='Blog' />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 cursor-pointer space-y-12">
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug.current} className="blog-item">
            <Image src={blog.image1Url} alt={blog.heading} width={800} height={460} className="mb-3  rounded-lg" />
            <div className='flex flex-wrap gap-4 text-sm text-gray-400'>
                <div className='flex items-center gap-2'>
                    <Image
                        src='/calender.png'
                        alt='Calendar icon'
                        width={20}
                        height={20}
                    />
                    <span>date</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image 
                        src='/days.png'
                        alt='Comments icon'
                        width={20}
                        height={20}
                    />
                    <span>comments</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image
                        src='/admin.png'
                        alt='Admin icon'
                        width={20}
                        height={20}
                    />
                    <span>Admin</span>
                </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-black">{blog.heading}</h2>
            <p className="inline-block py-3  text-gray-500">{blog.paragraph1}</p>
            <button><Link href={`/blog/${blog.slug.current}`} className="flex text-lg mb-10 text-orange-500 bg-white border border-orange-500 scale-100 hover:scale-105 px-6 py-2 rounded-lg gap-2">Read More <span className="mt-1"><GoArrowUpRight /></span></Link></button>
            
              
              
          </li>
        ))}
      </ul>
      </div>
      
      <Sidebar/>
      </div>
    </div>
    </>
  );
};

