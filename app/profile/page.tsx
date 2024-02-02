"use client";
import styles from "./page.module.css";
import Nav from "../components/Nav";
import ProfileHeader from "../components/ProfileHeader";
import ProfileGrid from "../components/ProfileGrid";
import ProfileGridEmpty from "../components/ProfileGridEmpty";
import { useState } from "react";

export default function Profile() {
  const [showStacks, setShowStacks] = useState<boolean>(true);
  const [showLikes, setShowLikes] = useState<boolean>(false);

  const toggleShowStacks = () => {
    setShowStacks(true);
    setShowLikes(false);
  };

  const toggleShowLikes = () => {
    setShowStacks(false);
    setShowLikes(true);
  };

  return (
    <>
      <main>
        <Nav />

        <div className="container">
          <ProfileHeader
            toggleShowStacks={toggleShowStacks}
            toggleShowLikes={toggleShowLikes}
          />

          <ProfileGrid showStacks={showStacks} showLikes={showLikes} />
          {/* <ProfileGridEmpty showStacks={showStacks} showLikes={showLikes} /> */}
        </div>
      </main>
    </>
  );
}
