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
  const authors = blogs.map((blog) => {
    const { author, likes } = blog;
    return {
      author,
      likes,
    };
  });

  const authorLikes = {};
  authors.forEach((author) => {
    if (authorLikes[author.author]) {
      authorLikes[author.author] += author.likes;
    } else {
      authorLikes[author.author] = author.likes;
    }
  });

  const max = Math.max(...Object.values(authorLikes));
  const most = Object.keys(authorLikes).find((key) => authorLikes[key] === max);
  return {
    author: most,
    likes: max,
  };
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
