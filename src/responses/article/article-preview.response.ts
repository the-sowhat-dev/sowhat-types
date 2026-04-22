/**
 * Lightweight projection used in article lists.
 * published_at is typed as string | Date because:
 * - DB queries return a Date (node-postgres)
 * - JSON serialization (API responses, Server→Client prop passing) produces a string
 */
export interface ArticlePreviewResponse {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  cover_image: string | null;
  author: string | null;
  category: string;
  keywords: string[] | null;
  reading_time: number | null;
  published_at: string | Date;
  collaboration: string | null;
}
