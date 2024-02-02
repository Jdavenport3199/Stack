import styles from "../stack/page.module.css";
import Image from "next/image";

export default function StackMore() {
  return (
    <>
      <div className="content">
        <p className="subtitle">
          <i className="fa-solid fa-ellipsis-vertical"></i>&ensp;MORE FROM TEST
          DEVELOPER
        </p>
        <div className={styles.cardHolder}>
          <div className={styles.card}>
            <Image
              className="img-thumbnail"
              src={"/image.png"}
              width="275"
              height="175"
              alt="profile-img"
            />
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImage}
                src={"/noprofile.png"}
                width="25"
                height="25"
                alt="profile-img"
              />
              <p className="title">Code Tracker</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              className="img-thumbnail"
              src={"/image.png"}
              width="275"
              height="175"
              alt="profile-img"
            />
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImage}
                src={"/noprofile.png"}
                width="25"
                height="25"
                alt="profile-img"
              />
              <p className="title">Code Tracker</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              className="img-thumbnail"
              src={"/image.png"}
              width="275"
              height="175"
              alt="profile-img"
            />
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImage}
                src={"/noprofile.png"}
                width="25"
                height="25"
                alt="profile-img"
              />
              <p className="title">Code Tracker</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              className="img-thumbnail"
              src={"/image.png"}
              width="275"
              height="175"
              alt="profile-img"
            />
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImage}
                src={"/noprofile.png"}
                width="25"
                height="25"
                alt="profile-img"
              />
              <p className="title">Code Tracker</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
