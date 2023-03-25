import axios from 'axios';
import './style.css';
import { useState } from 'react';

export default function CreatePostPage() {
  const [status, setStatus] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    if (JSON.parse(localStorage.getItem('id'))) {
      const newPost = {
        text: event.target.postText.value,
        embedPhotoURL: 'https://pic',
        authorId: JSON.parse(localStorage.getItem('id')),
      };
      axios
        .post('http://cepbep.ddns.net:1500/api/posts/createPost', newPost, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setStatus('post created successfully');
          }
        });
    } else {
      setStatus('No Current user. Login or Create new user');
    }
  };

  return (
    <section className='createPostWrapper'>
      <h2>Create Post</h2>
      <form
        onSubmit={(event) => submitHandler(event)}
        className='createPostForm'
      >
        <label htmlFor='postText'>Post Text</label>
        <textarea cols={150} rows={5} name='postText' />
        <input type='submit' />
      </form>
      <div>
        <p className='res'>{status}</p>
      </div>
    </section>
  );
}
