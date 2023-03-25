import axios from 'axios';
import './style.css';
import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [postsText, setPostsText] = useState([]);
  const [postsType, setPostsType] = useState('allPosts');

  const getAllPosts = () => {
    axios
      .post(
        `http://cepbep.ddns.net:1500/api/posts/getPostsByFilter`,
        {
          filter: { userName: JSON.parse(localStorage.getItem('id')) },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => setPostsText(res.data));
  };

  const getMyPosts = () => {
    axios
      .post(
        `http://cepbep.ddns.net:1500/api/posts/getPostsByFilter`,
        {
          filter: { userName: JSON.parse(localStorage.getItem('id')) },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) =>
        res.data.filter(
          (item) => item.authorId === JSON.parse(localStorage.getItem('id'))
        )
      )
      .then((data) => setPostsText(data));
  };

  const handleChange = (event) => {
    setPostsType(event.target.value);
    if (event.target.value === 'allPosts') {
      getAllPosts();
    } else {
      getMyPosts();
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <section className='newPostWrapper'>
      <h2>Posts page</h2>
      <form className='postPostForm'>
        <div>
          <input
            type='radio'
            value='allPosts'
            checked={postsType === 'allPosts'}
            onChange={handleChange}
          />{' '}
          All Posts
        </div>
        <div>
          <input
            type='radio'
            value='myPosts'
            checked={postsType === 'myPosts'}
            onChange={handleChange}
          />{' '}
          My Posts
        </div>
      </form>

      <div className='postsList'>
        {' '}
        {postsText &&
          postsText
            .filter((post) => post.text !== '')
            .map((post) => (
              <div className='postItem' key={post._id}>
                <p> {post.text}</p>
                <h5>Created date: {post.dateCreated}</h5>
              </div>
            ))}
      </div>
    </section>
  );
}
