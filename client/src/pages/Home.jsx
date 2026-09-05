import { useState } from "react";
import RoomAction from "../components/RoomAction";
import { homeStyles } from "../styles/tailwindStyles";

const Home = () => {
  const [roomBarOpened, setRoomBarOpened] = useState(false);
  const [action, setAction] = useState("");

  const handleClose = () => {
    setRoomBarOpened(false);
    setAction("");
  };

  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.backgroundGlow} />

      <h1 className={homeStyles.heading}>Welcome!</h1>
      <p className={homeStyles.subheading}>
        Start or join an ephemeral anonymous session instantly.
      </p>

      <div className={homeStyles.buttonWrapper}>
        <button
          className={homeStyles.btnCreate}
          onClick={() => {
            setAction("create");
            setRoomBarOpened(true);
          }}
        >
          Create Room
        </button>
        <button
          className={homeStyles.btnJoin}
          onClick={() => {
            setAction("join");
            setRoomBarOpened(true);
          }}
        >
          Join Room
        </button>
      </div>

      {roomBarOpened && (
        <div className={homeStyles.backdrop} onClick={handleClose} />
      )}

      {action ? <RoomAction action={action} /> : ""}
    </div>
  );
};

export default Home;