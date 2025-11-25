// app/use-cases/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getUseCases } from '@/lib/contentful';
import { formatDate } from '@/lib/utils';

export const revalidate = 60; 

export default async function UseCasePage() { // Đổi tên function cho chuẩn
  const allPosts = await getUseCases();

  // --- PHÂN CHIA BỐ CỤC ---
  const heroPost = allPosts[0];
  const middlePosts = allPosts.slice(1, 3);
  const bottomPosts = allPosts.slice(3, 6);
  const remainingPosts = allPosts.slice(6);

  return (
    <div className="container mx-auto py-16 px-4 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="bg-pink-300 text-black px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
          Use Case
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
          Read the latest Useful Case
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore our collection of in-depth articles that break down how AI agents are transforming workflows...
        </p>
      </div>

      {/* SECTION 1: HERO POST */}
      {heroPost && (
        <div className="mb-16 group cursor-pointer">
          {/* ❌ LỖI CŨ: href={`/blog/${heroPost.fields.slug}`} */}
          {/* ✅ SỬA LẠI: Trỏ về đúng folder use-cases */}
          <Link href={`/use-cases/${heroPost.fields.slug}`}>
            <div className="grid md:grid-cols-5 gap-8 items-center border rounded-2xl p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              <div className="md:col-span-3 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                {heroPost.fields.thumbnail && (
                  <Image
                    src={`https:${heroPost.fields.thumbnail.fields.file.url}`}
                    alt={heroPost.fields.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority 
                  />
                )}
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="text-sm text-gray-500 mb-2">
                   {formatDate(heroPost.sys.createdAt)}
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {heroPost.fields.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-4 text-lg">
                  {heroPost.fields.excerpt || "Click to read more..."}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* SECTION 2: MIDDLE POSTS */}
      {middlePosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {middlePosts.map((post) => (
            // ✅ SỬA LẠI HREF
            <Link key={post.sys.id} href={`/use-cases/${post.fields.slug}`} className="group">
              <div className="h-full flex flex-col border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[250px] w-full overflow-hidden">
                  {post.fields.thumbnail && (
                    <Image
                      src={`https:${post.fields.thumbnail.fields.file.url}`}
                      alt={post.fields.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-gray-500 mb-2">
                     {formatDate(post.sys.createdAt)}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary line-clamp-2">
                    {post.fields.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm">
                    {post.fields.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* SECTION 3: BOTTOM POSTS */}
      {bottomPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bottomPosts.map((post) => (
            // ✅ SỬA LẠI HREF
            <Link key={post.sys.id} href={`/use-cases/${post.fields.slug}`} className="group">
              <div className="h-full border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-[200px] w-full overflow-hidden">
                  {post.fields.thumbnail && (
                    <Image
                      src={`https:${post.fields.thumbnail.fields.file.url}`}
                      alt={post.fields.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs text-gray-500 mb-2">
                     {formatDate(post.sys.createdAt)}
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary line-clamp-2">
                    {post.fields.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm">
                    {post.fields.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* SECTION 4: REMAINING POSTS */}
      {remainingPosts.length > 0 && (
        <div className="border-t pt-16">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl font-bold">Các Use Case khác</h3>
            <span className="text-sm text-gray-400 hidden md:block">
              Kéo sang ngang để xem thêm &rarr;
            </span>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {remainingPosts.map((post) => (
              <Link 
                key={post.sys.id} 
                // ✅ SỬA LẠI HREF
                href={`/use-cases/${post.fields.slug}`} 
                className="group min-w-[280px] md:min-w-[300px] snap-start"
              >
                <div className="h-full flex flex-col border rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white dark:bg-slate-900">
                  <div className="relative h-[160px] w-full">
                    {post.fields.thumbnail ? (
                      <Image
                        src={`https:${post.fields.thumbnail.fields.file.url}`}
                        alt={post.fields.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                       <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">No Image</span>
                       </div>
                    )}
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <div className="text-xs text-gray-500 mb-2">
                       {formatDate(post.sys.createdAt)}
                    </div>
                    <h4 className="text-base font-bold mb-2 group-hover:text-primary line-clamp-2">
                      {post.fields.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-auto">
                      {post.fields.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}