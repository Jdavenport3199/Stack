"use client";
import styles from "../profile/page.module.css";
import Image from "next/image";

const ProfileHeader = ({
  toggleShowStacks,
  toggleShowLikes,
}: {
  toggleShowStacks: () => void;
  toggleShowLikes: () => void;
}) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.profile}>
          <Image
            className={styles.profileImage}
            src={"/noprofile.png"}
            width="100"
            height="100"
            alt="profile-img"
          />
          <div className={styles.profileTextHolder}>
            <span className="title">Test Developer</span>
            <p className={styles.profileTextUsername}>@testdev</p>
          </div>
        </div>
        {/* <div className={styles.profileButtonHolder}>
          <button className={styles.settingsButton}>
            <i className="fa-solid fa-gear"></i>
          </button>
        </div> */}
      </div>
      <div
        className={styles.profileButtonHolder}
        style={{ borderBottom: "1px solid #171d1c20", marginBottom: "1rem" }}
      >
        <div className={styles.buttonHolder}>
          <button className="subtitle" onClick={toggleShowStacks}>
            <i className="fa-solid fa-ellipsis-vertical"></i>&ensp;YOUR STACKS
          </button>
          <div>
            <button className="subtitle" onClick={toggleShowLikes}>
              <i className="fa-solid fa-heart fa-sm"></i>
              &nbsp;LIKES
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default ProfileHeader;
