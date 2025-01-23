import CommentSection from "@/components/CommentSection";
import PageHeader from "@/components/PageHeader";
import Sidebar from "@/components/Sidebar";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const query = `
    *[_type == "blog" && slug.current == $slug][0]{
      "image1Url": image1.asset->url,
      heading,
      paragraph1,
      paragraph2,
      paragraph3,
      paragraph4,
      "image2Url": image2.asset->url,
      paragraph5,
      paragraph6,
      paragraph7,
      paragraph8,
      slug,
      _createdAt,
      "comments": *[_type == "comment" && post._ref == ^._id] | order(_createdAt desc) {
        _id,
        name,
        email,
        comment,
        _createdAt
      }
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full bg-white">
<PageHeader title='Blog Details' currentPage='Blog Details' />

<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Left Column - Main Content */}
  <div className="lg:col-span-2 space-y-8 shadow-sm">
  <div className="relative aspect-video">
      <Image src={blog.image1Url} alt="Image 1" width={800} height={460} className="object-cover rounded-lg mb-3" />
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
      </div>
      
      {/*blog ontent*/}
      <article className="prose prose-lg max-w-none">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">{blog.heading}</h1>
      <div className="space-y-6 text-gray-600">
      <p className="leading-relaxed">{blog.paragraph1}</p>
      <p className="leading-relaxed">{blog.paragraph2}</p>
      <blockquote className="bg-[#FF9F0D] p-6 lg:p-8 rounded-lg my-8">
       <div className="flex gap-4 items-start">
       <Image
                      src="/comma.png" 
                      alt="Quote" 
                      width={48} 
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 object-contain"
                    />
      <p className="text-white text-base md:text-lg font-medium">{blog.paragraph3}</p>
      </div>
      </blockquote>
      <p className="leading-relaxed">{blog.paragraph4}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
       <div className="space-y-4">
       <p>{blog.paragraph5}</p>
       <p>{blog.paragraph6}</p>
       </div>
      <Image src={blog.image2Url} alt="Image 2" width={440} height={370} className="object-cover rounded-lg" />
      </div>
      <p className="leading-relaxed">{blog.paragraph7}</p>
      <p className="leading-relaxed">{blog.paragraph8}</p>
      <div className="mt-6">
      <CommentSection 
        postId={blog._id} 
        initialComments={blog.comments} 
      />
      </div>
      </div>
      </article>
      </div>
      {/* Right Column - Sidebar */}
      <Sidebar/>
      </div>
      </div>
    </div>
  );
}
