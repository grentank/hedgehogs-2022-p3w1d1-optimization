import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from 'reactstrap';
import { useHandlersContext, usePostContext } from '../../contexts/PostContext';
import type { Post, DeleteHandlerType } from '../../types/PostType';

type OnePostCardProps = {
  post: Post;
  // deleteHandler: DeleteHandlerType;
};

function OnePostCard({ post }: OnePostCardProps): JSX.Element {
  console.log('render');
  // window[`handler${post.id}`] = (): number => 5;
  const { deleteHandler } = useHandlersContext();
  return (
    <Card
      className="my-2"
      style={{
        width: '18rem',
      }}
    >
      <CardHeader>{post.id}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">{post.title}</CardTitle>
        <CardText>{post.body}</CardText>
        <ButtonGroup>
          <Button color="info" size="lg">
            <Link to={`/posts/${post.id}`}>Show more</Link>
          </Button>
          <Button color="danger" size="lg" onClick={() => deleteHandler(post.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </CardBody>
      <CardFooter>{post.userId}</CardFooter>
    </Card>
  );
}

export default memo(OnePostCard);
