import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import type { AddPostFormInputType } from '../types/FormTypes';

type AddPostFormProps = {
  addPostHandler: (e: React.FormEvent<HTMLFormElement & AddPostFormInputType>) => void;
};

export default function AddPostForm({ addPostHandler }: AddPostFormProps): JSX.Element {
  return (
    <Form onSubmit={addPostHandler}>
      <FormGroup floating>
        <Input id="titleId" name="postTitle" placeholder="Title" type="text" />
        <Label for="titleId">Title</Label>
      </FormGroup>{' '}
      <FormGroup floating>
        <Input id="bodyId" name="body" placeholder="Body" type="text" />
        <Label for="bodyId">Body</Label>
      </FormGroup>{' '}
      <Button>Submit</Button>
    </Form>
  );
}
