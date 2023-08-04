import Bloglist from "./components/bloglist"
import NewBlog from "./components/newBlog";

import { useState, useEffect } from 'react';

import BlogsService from "./services/blogs.service";

const defaultBlogs = [
  {
    id: '1',
    title: "How to grow your hair really long",
    author: 'John C Barber',
    url: 'http://longhair.com',
    likes: 0,
  }
];

import './App.css';

function App() {
  const [blogs, setBlogs] = useState(defaultBlogs);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const handleTitleChange = (event) => { 
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => { 
    setAuthor(event.target.value);
  };

  const getBlogs = async () => {
    const response = await BlogsService.getAll();
    setBlogs(response.data);
  };

  const addBlog = async (blog) => {
    const response = await BlogsService.create(blog);
    return response.data;
  };

  const handleAddBlogClick = async (event) => { 
    event.preventDefault();
    console.log(event);
    console.log('handleAddBlogClick');
    console.log('title', title);
    console.log('author', author);
    console.log('url', url);
    const blog = {
      title,
      author,
      url,
      likes: 0,
    };
    const newBlog = await addBlog(blog);
    setBlogs([...blogs, newBlog]);
    setTitle('');
    setAuthor('');
    setUrl('');
  };

  useEffect(() => {
    async function doStuff() {
      await getBlogs();
    }
    doStuff();
  }, []);

  return (
    <>
      <div className='app'>
        <NewBlog
          handleAddBlogClick={handleAddBlogClick}
          title={title}
          handleTitleChange={handleTitleChange}
          author={author}
          handleAuthorChange={handleAuthorChange}
          url={url}
          handleUrlChange={handleUrlChange}
        />
        <Bloglist blogs={blogs} />
      </div>
    </>
  );
}

export default App
