export type TiTopHeadlinesParams = Partial<{
  country: "ru";
  category: string;
  q: string;
  pageSize: number;
  page: number;
}>;

export type TiTopHeadlinesResponseItem = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type TiTopHeadlinesResponse = {
  status: "ok";
  totalResults: number;
  articles: TiTopHeadlinesResponseItem[];
};
