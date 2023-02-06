import React from 'react';
import type { Post, DeleteHandlerType } from '../types/PostType';
import OnePostCard from './OnePostCard';

type ListAllPostsProps = {
  posts: Post[];
  deleteHandler: DeleteHandlerType;
};

export default function ListAllPosts({ posts, deleteHandler }: ListAllPostsProps): JSX.Element {
  return (
    <>
      {posts.map((post) => (
        <OnePostCard key={post.id} post={post} deleteHandler={deleteHandler} />
      ))}
    </>
  );
}
