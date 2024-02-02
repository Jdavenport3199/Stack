"use client";
import styles from "../profile/page.module.css";

interface ProfileGridProps {
  showStacks: boolean;
  showLikes: boolean;
}

const ProfileGridEmpty: React.FC<ProfileGridProps> = ({
  showStacks,
  showLikes,
}) => {
  return (
    <>
      <div className={styles.container}>
        {/* STACKS */}
        {showStacks && (
          <div className={styles.content}>
            <div className={styles.iconHolder}>
              <i className="fa-solid fa-plus"></i>
            </div>
            <span className={styles.iconHeading}>Create Stack</span>
            <p>When you create Stacks, they will appear on your profile.</p>
            <div className={styles.linkHolder}>
              <a href="/create" className={styles.link}>
                Create your first Stack
              </a>
            </div>
          </div>
        )}

        {/* LIKES */}
        {showLikes && (
          <div className={styles.content}>
            <div className={styles.iconHolder}>
              <i className="fa-solid fa-heart"></i>
            </div>
            <span className={styles.iconHeading}>Liked Stacks</span>
            <p>When you like Stacks, they will appear on your profile.</p>
            <div className={styles.linkHolder}>
              <a href="/explore" className={styles.link}>
                Explore community Stacks
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ProfileGridEmpty;
