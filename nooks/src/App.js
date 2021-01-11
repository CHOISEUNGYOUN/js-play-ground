import React, { useEffect, useRef, useState } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission()
        .then(permission => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

function App() {
  const triggerNotification = useNotification("Can I steal your kimchi?", { body: "I love kimch! Don't you?" });
  return (
    <div className="App">
      <button onClick={triggerNotification}>hi</button>
    </div>
  );
}

export default App;
