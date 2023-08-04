import Axios from 'axios';

const API_URL = 'http://localhost:3000/api/blogs';

const cleanBlog = (data) => { 
  const { _id, ...cleanedData } = data;
  cleanedData.id = _id;
  delete cleanedData.__v
  return cleanedData;
}

const getAll = () => { 
  return Axios.get(API_URL);
};

const get = async (id) => {
  const foundBlog = await Axios.get(`${API_URL}/${id}`);
  if (foundBlog) {
    return cleanBlog(foundBlog.data);
  }
};

const create = data => {
  return Axios.post(API_URL, data);
};

const update = (id, data) => {
  return Axios.put(`${API_URL}/${id}`, data);
};

const remove = id => {
  return Axios.delete(`${API_URL}/${id}`);
};

const removeAll = () => { 
  return Axios.delete(API_URL);
};

const findByTitle = title => {
  return Axios.get(`${API_URL}?title=${title}`);
}

const BlogsService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default BlogsService;
