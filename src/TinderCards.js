import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

// react way to store data in array
// setPeople(...people,['dinesh]);
function TinderCards() {
  const [poeple, setPeople] = useState([]);

  useEffect(() => {
    // piece of code run based on certain condition is known as a useEffect
    const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
      // remove parenthensis of (snapshot) if bug or error occur
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      // perform cleanup before executing useEffect so basically optimize speed of site
      unsubscribe();
    };
  }, [poeple]);

  return (
    <div>
      <div className="tinderCard__Container">
        {poeple.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}>
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
