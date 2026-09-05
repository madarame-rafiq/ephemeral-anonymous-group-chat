import { roomActionStyles } from "../styles/tailwindStyles";

const RoomAction = ({ action }) => {
  return (
    <div className={roomActionStyles.modalContainer}>
      <div className={roomActionStyles.card}>
        <h2 className={roomActionStyles.title}>
          {action === "create" ? "Create a Room" : "Join a Room"}
        </h2>

        <div className={roomActionStyles.fieldGroup}>
          <label htmlFor="username" className={roomActionStyles.label}>
            Enter anonymous name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="e.g. ShadowFox"
            className={roomActionStyles.input}
            autoComplete="off"
          />
        </div>

        {action === "join" ? (
          <div className={roomActionStyles.fieldGroup}>
            <label htmlFor="roomCode" className={roomActionStyles.label}>
              Room Code
            </label>
            <input
              type="text"
              id="roomCode"
              name="roomCode"
              placeholder="e.g. X9K2P"
              className={roomActionStyles.input}
              autoComplete="off"
            />
          </div>
        ) : (
          ""
        )}

        <input
          type="submit"
          value={action === "create" ? "Create Room" : "Join Room"}
          className={roomActionStyles.submitBtn}
        />
      </div>
    </div>
  );
};

export default RoomAction;