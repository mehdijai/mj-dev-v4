declare interface SMLink {
  name: string;
  url: string;
  logo: string;
}

declare interface ITag {
  id: number;
  title: string;
  bg: string;
  color: string;
}

declare interface IProject {
  id: number;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  thumbnail: string;
  content: string;
  tags: ITag[];
}
