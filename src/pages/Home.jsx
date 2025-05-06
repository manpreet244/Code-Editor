import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuid();
    setRoomId(id);
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/logoimg.png" alt="logo" className="homePageLogo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputContainer">
          <input type="text" className="inputBox" placeholder="ROOM ID"
           value={roomId} onChange={(e) => setRoomId(e.target.value)} />
          <input type="text" className="inputBox" placeholder="USERNAME" 
           value={userName} onChange={(e) => setUserName(e.target.value)} 
          />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" onClick={createNewRoom} className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>Built with love by </h4> &nbsp;
        <a href="https://github.com/manpreet244/">Manpreet</a>
      </footer>
    </div>
  );
};

export default Home;
