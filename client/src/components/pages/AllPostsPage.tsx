import React from 'react';
import PostContextProvider from '../../contexts/PostContext';
import AddPostForm from '../ui/AddPostForm';
import ListAllPosts from '../ui/ListAllPosts';

export default function AllPostsPage(): JSX.Element {
  return (
    <PostContextProvider>
      <>
        <AddPostForm />
        <ListAllPosts />
      </>
    </PostContextProvider>
  );
}
