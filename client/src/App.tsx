import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container } from 'reactstrap';
import AddPostForm from './components/AddPostForm';
import ListAllPosts from './components/ListAllPosts';
import type { AddPostFormInputType } from './types/FormTypes';
import type { Post, PostId } from './types/PostType';

function App(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios<Post[]>('/api/posts')
      .then((res) => res.status === 200 && setPosts(res.data))
      .catch(console.log);
  }, []);

  const addPostHandler = (e: React.FormEvent<HTMLFormElement & AddPostFormInputType>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;
    const { postTitle, body } = form;
    const reqbody = { title: postTitle.value, body: body.value };
    // const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddPostFormValuesType;

    axios
      .post<Post>('/api/posts', reqbody)
      .then((res) => {
        setPosts((prev) => [res.data, ...prev]);
        form.reset();
      })
      .catch(console.log);
  };

  const deleteHandler = useCallback((id: PostId): void => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => setPosts((prev) => prev.filter((post) => post.id !== id)))
      .catch(console.log);
  }, []);

  const totalString = useMemo(() => posts.reduce((acc, cur) => acc + cur.title, ''), []);

  console.log(totalString.length);

  return (
    <Container>
      <AddPostForm addPostHandler={addPostHandler} />
      <ListAllPosts posts={posts} deleteHandler={deleteHandler} />
    </Container>
  );
}

export default App;
