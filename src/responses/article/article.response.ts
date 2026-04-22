export interface ArticleResponse {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string;
  content: string;
  cover_image: string | null;
  author: string | null;
  category: string;
  keywords: string[] | null;
  reading_time: number | null;
  is_published: boolean | null;
  published_at: Date;
  updated_at: Date | null;
  created_at: Date | null;
  collaboration: string | null;
}
