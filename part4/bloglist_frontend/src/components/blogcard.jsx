import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => {
  return (
    <div className="blogCard">
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <a href={blog.url}>{blog.url}</a>
      <p>{blog.likes}</p>
      <a href={`/api/blogs/${blog.id}`}>{blog.id}</a>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })
}

export default BlogCard;