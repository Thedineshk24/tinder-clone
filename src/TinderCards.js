import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

// react way to store data in array
// setPeople(...people,['dinesh]);
function TinderCards() {
  const [poeple, setPeople] = useState([
    {
      name: "dinesh",
      url:
        "https://pbs.twimg.com/profile_images/1273614845665873920/IcHRFarG_400x400.jpg",
    },
    {
      name: "super women",
      url: "https://images.pexels.com/photos/3180273/pexels-photo-3180273.jpeg",
    },
  ]);

  return (
    <div>
      <h1>tinder cards</h1>
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
