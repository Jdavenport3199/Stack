import Link from "next/link";
import styles from "../profile/page.module.css";
import Image from "next/image";

interface ProfileGridProps {
  showStacks: boolean;
  showLikes: boolean;
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ showStacks, showLikes }) => {
  return (
    <>
      {/* STACKS */}
      {showStacks && (
        <div className={styles.cardHolder}>
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="275"
                  height="175"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <p className="title">Code Tracker</p>
                  </div>
                  <div className={styles.likeHolder}>
                    <i
                      className="fa-solid fa-heart fa-sm"
                      style={{ color: "red" }}
                    ></i>
                    <p className={styles.likeText}>&ensp;9.9k</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* EXTRA */}
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="275"
                  height="175"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <p className="title">Code Tracker</p>
                  </div>
                  <div className={styles.likeHolder}>
                    <i
                      className="fa-solid fa-heart fa-sm"
                      style={{ color: "red" }}
                    ></i>
                    <p className={styles.likeText}>&ensp;9.9k</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="275"
                  height="175"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <p className="title">Code Tracker</p>
                  </div>
                  <div className={styles.likeHolder}>
                    <i
                      className="fa-solid fa-heart fa-sm"
                      style={{ color: "red" }}
                    ></i>
                    <p className={styles.likeText}>&ensp;9.9k</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="275"
                  height="175"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <p className="title">Code Tracker</p>
                  </div>
                  <div className={styles.likeHolder}>
                    <i
                      className="fa-solid fa-heart fa-sm"
                      style={{ color: "red" }}
                    ></i>
                    <p className={styles.likeText}>&ensp;9.9k</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="275"
                  height="175"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <p className="title">Code Tracker</p>
                  </div>
                  <div className={styles.likeHolder}>
                    <i
                      className="fa-solid fa-heart fa-sm"
                      style={{ color: "red" }}
                    ></i>
                    <p className={styles.likeText}>&ensp;9.9k</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="275"
                  height="175"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <p className="title">Code Tracker</p>
                  </div>
                  <div className={styles.likeHolder}>
                    <i
                      className="fa-solid fa-heart fa-sm"
                      style={{ color: "red" }}
                    ></i>
                    <p className={styles.likeText}>&ensp;9.9k</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="275"
                  height="175"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <p className="title">Code Tracker</p>
                  </div>
                  <div className={styles.likeHolder}>
                    <i
                      className="fa-solid fa-heart fa-sm"
                      style={{ color: "red" }}
                    ></i>
                    <p className={styles.likeText}>&ensp;9.9k</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="275"
                  height="175"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <p className="title">Code Tracker</p>
                  </div>
                  <div className={styles.likeHolder}>
                    <i
                      className="fa-solid fa-heart fa-sm"
                      style={{ color: "red" }}
                    ></i>
                    <p className={styles.likeText}>&ensp;9.9k</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* LIKES */}
      {showLikes && (
        // <div className={styles.cardHolder}>
        //   <div className={styles.card}>
        //     <div className={styles.cardContent}>
        //       <Image
        //         src={"/image.png"}
        //         className="img-thumbnail"
        //         width="415"
        //         height="265"
        //         alt="profile-img"
        //       />
        //       <div className={styles.cardTitleHolder}>
        //         <div className={styles.cardTitle}>
        //           <p className="title">Code Tracker</p>
        //         </div>

        //         <div className={styles.cardTitleHolder}>
        //           <div className={styles.likeHolder}>
        //             <i
        //               className="fa-solid fa-heart fa-sm"
        //               style={{ color: "red" }}
        //             ></i>
        //             <p className={styles.likeText}>&ensp;9.9k</p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>

        <div className={styles.container}>
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
        </div>
      )}
    </>
  );
};
export default ProfileGrid;
