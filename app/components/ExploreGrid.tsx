import Link from "next/link";
import styles from "../explore/page.module.css";
import Image from "next/image";

export default function ExploreGrid() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.cardHolder}>
          <Link href="/stack" style={{ padding: "0" }}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image
                  src={"/image.png"}
                  className="img-thumbnail"
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
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
                  width="415"
                  height="265"
                  alt="profile-img"
                  style={{ border: "1px solid transparent" }}
                />
                <div className={styles.cardTitleHolder}>
                  <div className={styles.cardTitle}>
                    <Image
                      className={styles.cardProfileImage}
                      src={"/noprofile.png"}
                      width="25"
                      height="25"
                      alt="profile-img"
                    />
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

                <div
                  style={{
                    marginTop: "0.4rem",
                    display: "flex",
                    justifyContent: "right",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <Image
                    className={styles.techImage}
                    src={"/javascript.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/mongodb.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/spotify.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/nextjs.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                  <Image
                    className={styles.techImage}
                    src={"/AWS.svg"}
                    width="30"
                    height="30"
                    alt="profile-img"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
