export type Post = {
  id: PostId;
  userId: number;
  title: string;
  body: string;
};

export type PostId = number;

export type DeleteHandlerType = (id: PostId) => void;
