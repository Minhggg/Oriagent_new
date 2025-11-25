// import { getUseCaseBySlug } from '@/lib/contentful'; // Hàm này đúng rồi
// import { formatDate } from '@/lib/utils';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { BLOCKS } from '@contentful/rich-text-types';
// import type { Metadata } from 'next';

// // 1. Cấu hình render ảnh (Sửa lại alt text)
// const renderOptions = {
//   renderNode: {
//     [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
//       // Check kỹ hơn để tránh crash nếu ảnh lỗi
//       const { file, title } = node.data.target.fields || {};
//       if (!file || !file.url) return null;

//       return (
//         <div className="my-8 relative w-full h-[300px] md:h-[500px]">
//            <Image
//             src={`https:${file.url}`}
//             alt={title || 'Use Case Illustration'} // Sửa: Blog Image -> Use Case Illustration
//             fill
//             className="object-contain rounded-lg" // object-contain để hiển thị full biểu đồ/screenshot
//           />
//         </div>
//       );
//     },
//   },
// };

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// // 2. (Gợi ý) Thêm Metadata để SEO chuẩn chỉ
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;
//   const useCase = await getUseCaseBySlug(slug);
//   if (!useCase) return { title: 'Not Found' };
  
//   return {
//     title: `${useCase.fields.title} | Use Cases`,
//     description: useCase.fields.excerpt || `Read about ${useCase.fields.title}`,
//   };
// }

// // 3. Đổi tên Component: BlogPostPage -> UseCaseDetailPage
// export default async function UseCaseDetailPage({ params }: Props) {
//   const { slug } = await params; 
  
//   // Đổi tên biến: post -> useCase
//   const useCase = await getUseCaseBySlug(slug);

//   if (!useCase) {
//     return notFound();
//   }

//   // 4. Xử lý logic lấy ảnh Cover (Ưu tiên coverImage, nếu không có thì lấy thumbnail)
//   // Logic này giúp code không bị lỗi nếu Contentful Model của bạn chưa có trường coverImage
//   const heroImage = useCase.fields.coverImage || useCase.fields.thumbnail;

//   return (
//     <article className="container mx-auto py-12 px-4 max-w-4xl">
//         {/* Header bài viết */}
//         <div className="mb-8 text-center">
//             {/* Tag nhỏ trên đầu */}
//             <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
//               Use Case
//             </span>

//             <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
//                 {useCase.fields.title}
//             </h1>
//             <p className="text-gray-500">
//                 Published on {formatDate(useCase.sys.createdAt)}
//             </p>
//         </div>

//         {/* Ảnh bìa lớn */}
//         {heroImage && (
//             <div className="relative w-full h-[300px] md:h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
//                 <Image
//                     src={`https:${heroImage.fields.file.url}`}
//                     alt={useCase.fields.title}
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//             </div>
//         )}

//         {/* Nội dung chính (Rich Text) */}
//         <div className="prose prose-lg dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:font-bold prose-a:text-blue-600">
//             {documentToReactComponents(useCase.fields.content, renderOptions)}
//         </div>
//     </article>
//   );
// }