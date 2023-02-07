import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AllPostsPage from './components/pages/AllPostsPage';
import MainPage from './components/pages/MainPage';
import OnePostPage from './components/pages/OnePostPage';
import AddPostForm from './components/ui/AddPostForm';
import ListAllPosts from './components/ui/ListAllPosts';
import MyNavBar from './components/ui/NavBar';
import PostContextProvider, { PostContext } from './contexts/PostContext';
import type { AddPostFormInputType } from './types/FormTypes';
import type { Post, PostId } from './types/PostType';

function App(): JSX.Element {
  return (
      <Container>
        <MyNavBar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/posts' element={<AllPostsPage />} />
          <Route path='/posts/:id' element={<OnePostPage />} />
        </Routes>
      </Container>
  );
}

export default App;
