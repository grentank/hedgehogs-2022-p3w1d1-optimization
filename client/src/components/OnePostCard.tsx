import React, { memo } from 'react';
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
import type { Post, DeleteHandlerType } from '../types/PostType';

type OnePostCardProps = {
  post: Post;
  deleteHandler: DeleteHandlerType;
};

function OnePostCard({ post, deleteHandler }: OnePostCardProps): JSX.Element {
  console.log('render');
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
            Show more
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
