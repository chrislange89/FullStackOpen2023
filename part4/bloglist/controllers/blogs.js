const Router = require('express').Router();
const Blog = require('../models/blog');
const logger = require('../utils/logger');

Router.get('/', (request, response, next) => {
  Blog
    .find({})
    .then((blogs) => {
      if (blogs.length > 0) {
        logger.info('blogs:', blogs);
        response.json(blogs);
      } else {
        response.json({
          message: 'No blogs found',
        });
      }
    })
    .catch((error) => {
      next(error);
    });
});

Router.post('/', (request, response, next) => {
  const blog = new Blog(request.body);
  blog
    .save()
    .then((result) => response.status(201).json(result))
    .catch((error) => next(error));
});

Router.delete('/:id', (request, response, next) => {
  const { id } = request.params;
  logger.info(request.params);
  Blog
    .findOneAndRemove({ _id: id })
    .then(() => response.status(204).end())
    .catch((error) => next(error));
});

Router.put('/:id', (request, response, next) => {
  const { body } = request;
  const { id } = request.params;

  const blog = {
    likes: body.likes,
    title: body.title,
    author: body.author,
    url: body.url,
  };

  Blog.findByIdAndUpdate(id, blog, { new: true })
    .then((updatedBlog) => {
      response.json(updatedBlog);
    })
    .catch((error) => next(error));
});

module.exports = Router;
