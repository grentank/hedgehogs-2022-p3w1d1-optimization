const express = require('express');
const { Post } = require('../db/models');

const postRouter = express.Router();

postRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allPosts = await Post.findAll({
        order: [['createdAt', 'DESC']],
      });
      res.json(allPosts);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const newPost = await Post.create({ ...req.body, userId: 1 });
      res.json(newPost);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

postRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const onePost = await Post.findByPk(req.params.id);
      res.json(onePost);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await Post.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = postRouter;
