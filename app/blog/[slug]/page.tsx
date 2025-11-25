// // app/blog/[slug]/page.tsx
// import { getMiAgentPostBySlug } from '@/lib/contentful';
// import { formatDate } from '@/lib/utils';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { BLOCKS } from '@contentful/rich-text-types';

// // Cấu hình render ảnh trong bài viết (Rich Text)
// const renderOptions = {
//   renderNode: {
//     [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
//       const { file, title } = node.data.target.fields || {};
//       if (!file || !file.url) return null;

//       return (
//         <div className="my-8 relative w-full h-[400px]">
//            <Image
//             src={`https:${file.url}`}
//             alt={title || 'Blog Image'}
//             fill
//             className="object-contain rounded-lg"
//           />
//         </div>
//       );
//     },
//   },
// };

// // 👇 QUAN TRỌNG: Định nghĩa params là Promise (Yêu cầu của Next.js 15/16)
// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export default async function BlogPostPage({ params }: Props) {
//   // 👇 QUAN TRỌNG: Phải await params trước khi lấy slug
//   const { slug } = await params; 
  
//   const post = await getMiAgentPostBySlug(slug);

//   if (!post) {
//     return notFound();
//   }

//   return (
//     <article className="container mx-auto py-12 px-4 max-w-4xl">
//         {/* Header bài viết */}
//         <div className="mb-8 text-center">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
//                 {post.fields.title}
//             </h1>
//             <p className="text-gray-500">
//                 {/* Đã sửa: Dùng sys.createdAt thay vì fields.date */}
//                 {formatDate(post.sys.createdAt)}
//             </p>
//         </div>

//         {/* Ảnh bìa lớn */}
//         {post.fields.coverImage && (
//             <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg">
//                 <Image
//                     src={`https:${post.fields.coverImage.fields.file.url}`}
//                     alt={post.fields.title}
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//             </div>
//         )}

//         {/* Nội dung chính (Rich Text) */}
//         <div className="prose prose-lg dark:prose-invert max-w-none">
//             {documentToReactComponents(post.fields.content, renderOptions)}
//         </div>
//     </article>
//   );
// }