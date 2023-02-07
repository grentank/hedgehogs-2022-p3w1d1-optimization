import React from 'react';
import { usePostContext } from '../../contexts/PostContext';
import type { Post, DeleteHandlerType } from '../../types/PostType';
import OnePostCard from './OnePostCard';

// type ListAllPostsProps = {
//   posts: Post[];
//   deleteHandler: DeleteHandlerType;
// };

export default function ListAllPosts(): JSX.Element {
  const posts = usePostContext();
  return (
    <>
      {posts.map((post) => (
        <OnePostCard key={post.id} post={post} />
      ))}
    </>
  );
}
