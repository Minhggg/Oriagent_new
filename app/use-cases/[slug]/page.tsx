import { getUseCaseBySlug } from '@/lib/contentful';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types'; // Thêm import Document

// Cấu hình render ảnh trong bài viết (Rich Text)
const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      // Thêm optional chaining (?.) để tránh lỗi nếu thiếu data
      const { file, title } = node.data.target.fields || {};
      
      if (!file || !file.url) return null;

      return (
        <div className="my-8 relative w-full h-[300px] md:h-[500px]">
           <Image
            src={`https:${file.url}`}
            alt={title || 'UseCase Image'}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      );
    },
  },
};

// Next.js 15+: Params là Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function UseCaseDetailPage({ params }: Props) {
  // 1. Await params để lấy slug
  const { slug } = await params;
  
  // 2. Fetch dữ liệu
  const post = await getUseCaseBySlug(slug);

  // 3. Nếu không tìm thấy bài -> Trả về 404
  if (!post) {
    return notFound();
  }

  // 4. Xử lý logic hiển thị ảnh bìa (Ưu tiên Cover -> Thumbnail -> Null)
  const coverImage = post.fields.coverImage || post.fields.thumbnail;

  return (
    <article className="container mx-auto py-16 px-4 max-w-4xl">
        {/* Header bài viết */}
        <div className="mb-10 text-center">
            <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Use Case
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                {post.fields.title}
            </h1>
            <div className="flex items-center justify-center text-gray-500 text-sm space-x-4">
                <time dateTime={post.sys.createdAt}>
                   {formatDate(post.sys.createdAt)}
                </time>
                {/* Có thể thêm tên tác giả nếu có */}
            </div>
        </div>

        {/* Ảnh bìa lớn */}
        {coverImage && (
            <div className="relative w-full h-[300px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                <Image
                    src={`https:${coverImage.fields.file.url}`}
                    alt={post.fields.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        )}

        {/* Nội dung chính (Rich Text) */}
        {/* Thêm check tồn tại content để tránh lỗi runtime */}
        {post.fields.content ? (
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                {documentToReactComponents(post.fields.content as Document, renderOptions)}
            </div>
        ) : (
            <p className="text-center text-gray-500 italic">Nội dung đang được cập nhật...</p>
        )}
    </article>
  );
}