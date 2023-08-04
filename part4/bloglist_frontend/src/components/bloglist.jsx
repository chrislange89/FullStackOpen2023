import PropTypes from 'prop-types';
import './bloglist.module.css';
import BlogCard from './blogcard';

const Bloglist = ({ blogs }) => {
  return (
    <>
      <h1>
        Blogs
      </h1>
      <div>
        {blogs.map((blog) => (
          <BlogCard
            blog={blog}
            key={blog.id}
          />
        ))}
      </div>
    </>
  )
}

Bloglist.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired
}

export default Bloglist;