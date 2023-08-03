import Bloglist from "./components/bloglist"
import { useState, useEffect } from 'react';
import Axios from "axios";

const defaultBlogs = [
  {
    id: '1',
    title: "How to grow your hair really long",
    author: 'John C Barber',
    url: 'http://longhair.com',
    likes: 0,
  }
];

function App() {
  const [blogs, setBlogs] = useState(defaultBlogs);

  const getBlogs = async () => {
    const response = await Axios.get('/api/blogs');
    setBlogs(response.data);
  };

  useEffect(() => {
    async function doStuff() {
      await getBlogs();
    }
    doStuff();
  }, []);

  return (
    <>
      <div className="App">
        hello
      </div>
      <Bloglist blogs={blogs} />
    </>
  )
}

export default App
