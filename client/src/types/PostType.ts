import type { AddPostFormInputType } from './FormTypes';

export type Post = {
  id: PostId;
  userId: number;
  title: string;
  body: string;
};

export type PostId = number;

export type DeleteHandlerType = (id: PostId) => void;

export type AddPostHandlerType = (
  e: React.FormEvent<HTMLFormElement & AddPostFormInputType>,
) => void;
