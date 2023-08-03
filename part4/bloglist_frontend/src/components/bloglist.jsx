import PropTypes from 'prop-types';
import * as Styles from './bloglist.module.css';

const Bloglist = ({ blogs }) => {
  return (
    <>
      <h1>
        Blogs
      </h1>
      <div>
        {blogs.map((blog) => (
          <div className={Styles.blogCard} key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <a href={blog.url}>{blog.url}</a>
            <p>{blog.likes}</p>
          </div>
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