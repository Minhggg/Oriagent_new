import { createClient } from 'contentful';

/* ---------------------------------------------------------
 * 1. KIỂM TRA ENV
 * --------------------------------------------------------- */
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    '❌ LỖI CONFIG: Chưa cấu hình CONTENTFUL_SPACE_ID hoặc CONTENTFUL_ACCESS_TOKEN trong .env'
  );
}

/* ---------------------------------------------------------
 * 2. KHỞI TẠO CLIENT
 * --------------------------------------------------------- */
export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

/* ---------------------------------------------------------
 * 3. KIỂU DỮ LIỆU (INTERFACE CHUNG)
 * --------------------------------------------------------- */

interface ContentfulImage {
  fields: {
    file: {
      url: string;
      details?: {
        image?: {
          width: number;
          height: number;
        };
      };
    };
    title?: string;
  };
}

export interface BaseEntry {
  sys: {
    id: string;
    createdAt: string;
    updatedAt?: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt?: string;
    content?: any;
    thumbnail?: ContentfulImage;
    coverImage?: ContentfulImage;
    tags?: string[];
  };
}

/* ---------------------------------------------------------
 * 4. GENERIC FUNCTION – DÙNG CHUNG CHO MỌI CONTENT TYPE
 * --------------------------------------------------------- */

async function getEntriesByType<T>(contentType: string): Promise<T[]> {
  const res = await client.getEntries({
    content_type: contentType,
    order: ['-sys.createdAt'],
  });

  return res.items as unknown as T[];
}

async function getEntryBySlug<T>(contentType: string, slug: string): Promise<T | null> {
  const res = await client.getEntries({
    content_type: contentType,
    'fields.slug': slug,
    limit: 1,
  });

  return res.items.length ? (res.items[0] as unknown as T) : null;
}

/* ---------------------------------------------------------
 * 5. BLOG POST (Blog of Oriagent)
 * --------------------------------------------------------- */

export async function getOriagentBlogPosts() {
  return getEntriesByType<BaseEntry>('blogPost'); // ID thật trong Contentful
}

export async function getOriagentBlogPostBySlug(slug: string) {
  return getEntryBySlug<BaseEntry>('blogPost', slug);
}

/* ---------------------------------------------------------
 * 6. POST (Blog của MIAgent)
 * --------------------------------------------------------- */

export async function getMiAgentPosts() {
  return getEntriesByType<BaseEntry>('post');
}

export async function getMiAgentPostBySlug(slug: string) {
  return getEntryBySlug<BaseEntry>('post', slug);
}

/* ---------------------------------------------------------
 * 7. USE CASE (Use Cases of Oriagent)
 * --------------------------------------------------------- */

export async function getUseCases() {
  return getEntriesByType<BaseEntry>('useCase');
}

export async function getUseCaseBySlug(slug: string) {
  return getEntryBySlug<BaseEntry>('useCase', slug);
}
