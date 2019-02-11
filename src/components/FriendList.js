import React, { useState,useEffect } from "react";

function useFriendStatusBoolean(friendID) {
  const [isOnline, setIsOnline] = useState(false);
  const handleToggle = status => {
    setIsOnline(!status.isOnline);
  };
  return [isOnline, { handleToggle }];
}


function FriendListItem(props) {
  const [isOnline, { ...action }] = useFriendStatusBoolean(props.friend.id);
  return (
    <div>
      <p style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</p>
      <button onClick={() => action.handleToggle(isOnline)}>
        {isOnline ? "Offline" : "Online"}
      </button>
    </div>
  );
}

export { FriendListItem };
