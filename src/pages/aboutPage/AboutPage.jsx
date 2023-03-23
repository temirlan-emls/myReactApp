import axios from 'axios';

export default function AboutPage() {
  const data = {
    userName: 'Tima',
    password: '111111',
    creator: 'admin',
    activeStatus: true,
    isClosedProfile: false,
    avatarURL: 'https://artershop.com/_sh/104/10406_2.jpg',
    about: "I'am Tima ....",
    description: 'Tima is ....',
    age: 21,
    country: 'Kz',
    city: 'Almaty',
    gender: 'Male',
    arrayOfFollowers: [],
    arrayOfFollowing: [],
    arrayOfPosts: [],
  };

  const postHandler = () => {
    axios
      .post('http://cepbep.ddns.net:1500/api/users/addUser', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <section>
      <h2>AboutPage</h2>
      <ul>
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
      </ul>
      <button onClick={postHandler}>Post user to server</button>
    </section>
  );
}
