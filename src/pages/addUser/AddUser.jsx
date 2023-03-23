import axios from 'axios';
import './style.css';
import { useEffect, useState } from 'react';

export default function AddUser() {
  const [allUsers, setAllUsers] = useState();

  const getAllUsers = () => {
    axios
      .get('http://cepbep.ddns.net:1500/api/users/getAllUsers')
      .then((res) => setAllUsers(res.data));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    let newUser = {
      userName: event.target.username.value,
      password: event.target.password.value,
      creator: 'admin',
      activeStatus: true,
      isClosedProfile: false,
      avatarURL: 'https://avatars.githubusercontent.com/u/47022046?v=4',
      about: 'demo about',
      description: 'demo desc',
      age: 999,
      country: 'Kz',
      city: 'Almaty',
      gender: 'Male',
      arrayOfFollowers: [],
      arrayOfFollowing: [],
      arrayOfPosts: [],
    };

    axios
      .post('http://cepbep.ddns.net:1500/api/users/addUser', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        getAllUsers();
      });
  };

  return (
    <section className='addUserWrapper'>
      <h2>ADD USER</h2>
      <form onSubmit={(event) => submitHandler(event)} className='postForm'>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' />
        <label htmlFor='password'>Password</label>
        <input type='text' name='password' />
        <input type='submit' />
      </form>

      <div className='usersList'>
        {allUsers &&
          [...allUsers]
            .reverse()
            .filter((item) => item.userName !== '')
            .splice(0, 35)
            .map((user) => (
              <div className='userItem' key={user._id}>
                <p> {user.userName}</p>
              </div>
            ))}
      </div>
    </section>
  );
}
