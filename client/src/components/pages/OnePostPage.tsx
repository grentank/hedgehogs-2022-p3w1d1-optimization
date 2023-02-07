import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Spinner } from 'reactstrap';
import { usePostContext } from '../../contexts/PostContext';
import type { Post } from '../../types/PostType';

export default function OnePostPage(): JSX.Element {
  //   const posts = usePostContext();
  const { id = '1' } = useParams();
  //   const onePost = posts.find((post) => post.id.toString() === id);
  //   if (!onePost) return <div>An error occured!</div>;

  const [onePost, setOnePost] = useState<Post | null>(null);

  useEffect(() => {
    axios<Post>(`/api/posts/${id}`)
      .then((res) => setOnePost(res.data))
      .catch(console.log);
  }, []);

  return !onePost ? (
    <Spinner color="primary">Loading...</Spinner>
  ) : (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/270?grayscale"
          style={{
            height: 270,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">{onePost?.title}</CardTitle>
          <CardText>{onePost?.body}</CardText>
          <CardText>
            <small className="text-muted">{onePost?.userId}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
}
