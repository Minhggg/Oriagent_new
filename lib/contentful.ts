// lib/contentful.ts
import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

// Interface chuẩn cho bài viết
export interface BlogPost {
  sys: { 
    id: string;
    createdAt: string; 
  };
  fields: {
    title: string;
    slug: string;
    summary?: string;
    content: any;
    
    // 👇 THÊM TRƯỜNG NÀY (Nếu bạn dùng thumbnail cho trang chủ)
    thumbnail?: {
      fields: {
        file: {
          url: string;
        };
      };
    };

    // 👇 Vẫn giữ coverImage nếu trang chi tiết bài viết dùng nó
    coverImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

// Lấy tất cả bài viết (Sắp xếp mới nhất)
export async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'post', // ID chuẩn là 'post'
    order: ['-sys.createdAt'], 
  });

  return response.items as unknown as BlogPost[];
}

// Lấy 1 bài viết theo slug
export async function getBlogPostBySlug(slug: string) {
  const response = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0] as unknown as BlogPost;
}