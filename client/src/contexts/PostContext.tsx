import axios from 'axios';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { AddPostFormInputType } from '../types/FormTypes';
import type {
  HandlersContextValueType,
  PostContextProviderProps,
  PostContextValueType,
} from '../types/PostContextTypes';
import type { Post, PostId } from '../types/PostType';

const PostContext = createContext<PostContextValueType | null>(null);
const HandlersContext = createContext<HandlersContextValueType | null>(null);

const usePostContext = (): PostContextValueType => {
  const context = useContext(PostContext);
  if (!context) throw new Error('usePostContext should be called inside the PostContext.Provider');

  return context;
};

const useHandlersContext = (): HandlersContextValueType => {
  const context = useContext(HandlersContext);
  if (!context)
    throw new Error('useHandlersContext should be called inside the HandlersContext.Provider');

  return context;
};

function PostContextProvider({ children }: PostContextProviderProps): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios<Post[]>('/api/posts')
      .then((res) => res.status === 200 && setPosts(res.data))
      .catch(console.log);
  }, []);

  const addPostHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement & AddPostFormInputType>): void => {
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
    },
    [],
  );

  const deleteHandler = useCallback((id: PostId): void => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => setPosts((prev) => prev.filter((post) => post.id !== id)))
      .catch(console.log);
  }, []);

  // const totalString = useMemo(() => posts.reduce((acc, cur) => acc + cur.title, ''), []);

  // console.log(totalString.length);

  const contextValue = useMemo(() => ({ deleteHandler, addPostHandler }), []);

  return (
    <PostContext.Provider value={posts}>
      <HandlersContext.Provider value={contextValue}>{children}</HandlersContext.Provider>
    </PostContext.Provider>
  );
}

export { PostContext, usePostContext, useHandlersContext };

export default PostContextProvider;
