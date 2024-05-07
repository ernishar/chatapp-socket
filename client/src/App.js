import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="container-sm d-flex ">
      {!showChat ? (
        <div className="joinChatContainer container-sm mt-5">
          <h3>Join A Chat</h3>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nishar..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary" onClick={joinRoom}>
            Join A Room
          </button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
