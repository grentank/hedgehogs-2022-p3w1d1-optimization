import type React from 'react';
import type { Post, DeleteHandlerType, AddPostHandlerType } from './PostType';

export type PostContextValueType = Post[];

export type HandlersContextValueType = {
  deleteHandler: DeleteHandlerType;
  addPostHandler: AddPostHandlerType;
};

export type PostContextProviderProps = {
  children: React.ReactElement;
};
