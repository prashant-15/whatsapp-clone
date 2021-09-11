import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';


function App() {
  const [msgs, setmsgs] = useState([]);
  const [user, setUser] = useState('');
  
  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setmsgs(response.data);
    })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('b954fb8fe5ed232a7941', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newmsg) => {
      setmsgs([...msgs, newmsg]);
    });

    return () => {
      channel.unsubscribe();
      channel.unbind_all();
    }
  }, [msgs]);

  useEffect(() => {
    if(!user || user === "") {
      var inpUser = prompt("Enter your name");
      while(!inpUser || inpUser === "" || inpUser.length === 0) {
        inpUser = prompt("Enter your name");
      }
      setUser(inpUser);
    }
  
    console.log(user);
  }, [user]);

  console.log(msgs);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar latestMsg={msgs?.[msgs.length - 1]?.message} />
        <Chat messages={msgs} user={user} />
      </div>
    </div>
  );
}

export default App;
