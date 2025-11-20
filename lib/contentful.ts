import { createClient } from 'contentful';

// ---------------------------------------------------------
// 1. KIỂM TRA BIẾN MÔI TRƯỜNG (Tránh lỗi crash ứng dụng)
// ---------------------------------------------------------
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    '❌ LỖI CONFIG: Không tìm thấy biến môi trường. Hãy kiểm tra file .env.local đã có CONTENTFUL_SPACE_ID và CONTENTFUL_ACCESS_TOKEN chưa.'
  );
}

// ---------------------------------------------------------
// 2. KHỞI TẠO CLIENT
// ---------------------------------------------------------
export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// ---------------------------------------------------------
// 3. ĐỊNH NGHĨA TYPE (INTERFACE)
// ---------------------------------------------------------

// Interface cho hình ảnh (Dùng chung cho thumbnail và cover)
interface ContentfulImage {
  fields: {
    file: {
      url: string;
      details?: {
        image: {
          width: number;
          height: number;
        };
      };
    };
    title?: string;
  };
}

// Interface chuẩn cho Bài Viết (Blog Post)
export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt?: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt?: string;
    content: any; // Sau này sẽ render bằng @contentful/rich-text-react-renderer
    
    // Hình ảnh
    thumbnail?: ContentfulImage;
    coverImage?: ContentfulImage;
    
    // Tags (nếu bạn có thêm trường tags dạng text list)
    tags?: string[];
  };
}

// ---------------------------------------------------------
// 4. CÁC HÀM LẤY DỮ LIỆU (API CALLS)
// ---------------------------------------------------------

/**
 * Lấy danh sách bài viết, sắp xếp mới nhất lên đầu
 */
export async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'post', // LƯU Ý: ID này phải trùng với "Content Model ID" trong Contentful
    order: ['-sys.createdAt'], 
  });

  return response.items as unknown as BlogPost[];
}

/**
 * Lấy chi tiết 1 bài viết dựa vào Slug
 */
export async function getBlogPostBySlug(slug: string) {
  const response = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    limit: 1,
  });

  // Kiểm tra xem có tìm thấy bài nào không
  if (response.items.length > 0) {
    return response.items[0] as unknown as BlogPost;
  }

  return null; // Trả về null nếu không tìm thấy (để trang hiển thị 404)
}