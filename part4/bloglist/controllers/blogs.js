const Router = require('express').Router();
const Blog = require('../models/blog');
const logger = require('../utils/logger');

const fixMongooseId = (blog) => {
  const fixedBlog = blog.toJSON();
  fixedBlog.id = fixedBlog._id.toString();
  delete fixedBlog._id;
  delete fixedBlog.__v;
  return fixedBlog;
};

// eslint-disable-next-line no-unused-vars
Router.get('/', async (request, response, next) => {
  const blogs = await Blog.find({});
  const formattedBlogs = blogs.map((blog) => fixMongooseId(blog));
  response.json(formattedBlogs);
});

// eslint-disable-next-line no-unused-vars
Router.get('/:id', (request, response, next) => {
  const { id } = request.params;
  Blog.findById(id)
    .then((blog) => {
      if (blog) {
        response.json(fixMongooseId(blog));
      } else {
        response.status(404).end();
      }
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
