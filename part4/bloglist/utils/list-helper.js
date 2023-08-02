function dummy(blogs) {
  blogs.count += 1;
  return 1;
}

function totalLikes(blogs) {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
}

function favoriteBlog(blogs) {
  const favorite = blogs.reduce((prev, current) => (prev.likes > current.likes ? prev : current));
  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  };
}

function mostBlogs(blogs) {
  const authors = blogs.map((blog) => blog.author);
  const author = authors.reduce((prev, current) => {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
  }, {});
  const max = Math.max(...Object.values(author));
  const most = Object.keys(author).find((key) => author[key] === max);
  return {
    author: most,
    blogs: max,
  };
}

function mostLikes(blogs) {
  // find the author with the most likes
  // sum the likes
  // return the author and the sum
  const authors = blogs.map((blog) => blog.author);
  const author = authors.
  const max = Math.max(...Object.values(author));
  const most = Object.keys(author).find((key) => author[key] === max);
  const likes = blogs.reduce((prev, current) => {
    if (current.author === most) {
      return prev + current.likes;
    }
    return prev;
  }, 0);
  return {
    author: most,
    likes,
  };
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
