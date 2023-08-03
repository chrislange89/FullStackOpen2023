import './newBlog.module.css'

import PropTypes from 'prop-types';

const NewBlog = ({ handleAddBlogClick, author, title, url, handleAuthorChange, handleTitleChange, handleUrlChange }) => {
  return (
    <div className='new-blog'>
      <h2>Add a New Blog</h2>
      <form>
        <label htmlFor='title'>Title</label>
        <input
          type="text"
          id='title'
          name='title'
          value={title}
          onChange={handleTitleChange}
        />  

        <label htmlFor='author'>Author</label>
        <input
          type='text'
          id='author'
          name='author'
          value={author}
          onChange={handleAuthorChange}
        />

        <label htmlFor='url'>URL</label>
        <input
          type='text'
          id='url'
          name='url'
          value={url}
          onChange={handleUrlChange}
        />

        <button type='submit' onClick={handleAddBlogClick}>
          Add Blog
        </button>
      </form>
    </div>
  );
};



NewBlog.propTypes = {
  handleAddBlogClick: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
};

export default NewBlog;