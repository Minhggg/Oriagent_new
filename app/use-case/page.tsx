// // app/use-cases/page.tsx (hoặc đường dẫn file tương ứng của bạn)
// import Link from 'next/link';
// import Image from 'next/image';
// import { getUseCases } from '@/lib/contentful';
// import { formatDate } from '@/lib/utils';

// export const revalidate = 60; 

// // 1. Đổi tên Component cho đúng ngữ nghĩa
// export default async function UseCasesPage() {
//   // 2. Đổi tên biến cho đúng ngữ cảnh (Post -> UseCase)
//   const allUseCases = await getUseCases();

//   // --- PHÂN CHIA BỐ CỤC ---
//   const heroCase = allUseCases[0];             
//   const middleCases = allUseCases.slice(1, 3);  
//   const bottomCases = allUseCases.slice(3, 6);  
//   const remainingCases = allUseCases.slice(6);  

//   return (
//     <div className="container mx-auto py-16 px-4 max-w-7xl">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
//           {/* SỬA: Đổi Label */}
//           Use Cases
//         </span>
//         <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
//           {/* SỬA: Đổi Tiêu đề */}
//           Success Stories & Applications
//         </h1>
//         <p className="text-gray-500 max-w-2xl mx-auto">
//           {/* SỬA: Đổi mô tả */}
//           See how our AI agents are transforming businesses across different industries.
//         </p>
//       </div>

//       {/* SECTION 1: HERO USE CASE */}
//       {heroCase && (
//         <div className="mb-16 group cursor-pointer">
//           {/* SỬA: Link trỏ về /use-cases/ thay vì /blog/ */}
//           <Link href={`/use-cases/${heroCase.fields.slug}`}>
//             <div className="grid md:grid-cols-5 gap-8 items-start border rounded-2xl p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
//               <div className="md:col-span-3 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
//                 {heroCase.fields.thumbnail && (
//                   <Image
//                     src={`https:${heroCase.fields.thumbnail.fields.file.url}`}
//                     alt={heroCase.fields.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     priority 
//                   />
//                 )}
//               </div>
//               <div className="md:col-span-2 flex flex-col justify-start pt-4 mt-4 md:mt-0">
//                 <div className="text-sm text-gray-500 mb-2">
//                    {formatDate(heroCase.sys.createdAt)}
//                 </div>
//                 <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
//                   {heroCase.fields.title}
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-400 line-clamp-4 text-lg">
//                   {heroCase.fields.excerpt || "Read the full success story..."}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       )}

//       {/* SECTION 2: MIDDLE CASES */}
//       {middleCases.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           {middleCases.map((useCase) => (
//             // SỬA: Link trỏ về /use-cases/
//             <Link key={useCase.sys.id} href={`/use-cases/${useCase.fields.slug}`} className="group">
//               <div className="h-full flex flex-col border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="relative h-[250px] w-full overflow-hidden">
//                   {useCase.fields.thumbnail && (
//                     <Image
//                       src={`https:${useCase.fields.thumbnail.fields.file.url}`}
//                       alt={useCase.fields.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   )}
//                 </div>
//                 <div className="p-6 flex-1 flex flex-col">
//                   <div className="text-xs text-gray-500 mb-2">
//                      {formatDate(useCase.sys.createdAt)}
//                   </div>
//                   <h3 className="text-2xl font-bold mb-3 group-hover:text-primary line-clamp-2">
//                     {useCase.fields.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm">
//                     {useCase.fields.excerpt}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* SECTION 3: BOTTOM CASES */}
//       {bottomCases.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {bottomCases.map((useCase) => (
//             // SỬA: Link trỏ về /use-cases/
//             <Link key={useCase.sys.id} href={`/use-cases/${useCase.fields.slug}`} className="group">
//               <div className="h-full border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
//                 <div className="relative h-[200px] w-full overflow-hidden">
//                   {useCase.fields.thumbnail && (
//                     <Image
//                       src={`https:${useCase.fields.thumbnail.fields.file.url}`}
//                       alt={useCase.fields.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   )}
//                 </div>
//                 <div className="p-5">
//                   <div className="text-xs text-gray-500 mb-2">
//                      {formatDate(useCase.sys.createdAt)}
//                   </div>
//                   <h4 className="text-lg font-bold mb-2 group-hover:text-primary line-clamp-2">
//                     {useCase.fields.title}
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm">
//                     {useCase.fields.excerpt}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* SECTION 4: REMAINING CASES */}
//       {remainingCases.length > 0 && (
//         <div className="border-t pt-16">
//           <div className="flex justify-between items-end mb-8">
//             {/* SỬA: Đổi tiêu đề section */}
//             <h3 className="text-2xl font-bold">More Use Cases</h3>
//             <span className="text-sm text-gray-400 hidden md:block">
//               Scroll horizontally to see more 
//             </span>
//           </div>
          
//           <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
//             {remainingCases.map((useCase) => (
//               <Link 
//                 key={useCase.sys.id} 
//                 // SỬA: Link trỏ về /use-cases/
//                 href={`/use-cases/${useCase.fields.slug}`} 
//                 className="group min-w-[280px] md:min-w-[300px] snap-start"
//               >
//                 <div className="h-full flex flex-col border rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white dark:bg-slate-900">
//                   <div className="relative h-[160px] w-full">
//                     {useCase.fields.thumbnail ? (
//                       <Image
//                         src={`https:${useCase.fields.thumbnail.fields.file.url}`}
//                         alt={useCase.fields.title}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     ) : (
//                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                           <span className="text-gray-400 text-xs">No Image</span>
//                        </div>
//                     )}
//                   </div>

//                   <div className="p-4 flex-1 flex flex-col">
//                     <div className="text-xs text-gray-500 mb-2">
//                        {formatDate(useCase.sys.createdAt)}
//                     </div>
//                     <h4 className="text-base font-bold mb-2 group-hover:text-primary line-clamp-2">
//                       {useCase.fields.title}
//                     </h4>
//                     <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-auto">
//                       {useCase.fields.excerpt}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }