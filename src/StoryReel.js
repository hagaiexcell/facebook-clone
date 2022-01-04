import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="https://placeimg.com/640/480/tech" profileSrc="https://picsum.photos/200" title="excell"/>
      <Story image="https://placeimg.com/640/480/people" profileSrc="https://picsum.photos/200" title="excell"/>
      <Story image="https://placeimg.com/640/480/nature" profileSrc="https://picsum.photos/200" title="excell"/>
      <Story image="https://placeimg.com/640/480/animals" profileSrc="https://picsum.photos/200" title="excell"/>
      <Story image="https://placeimg.com/640/480/architecture" profileSrc="https://picsum.photos/200" title="excell"/>
    </div>
    
  );
}

export default StoryReel;
