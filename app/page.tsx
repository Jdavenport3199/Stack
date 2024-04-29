import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./components/Nav";
import StackHeader from "./components/StackHeader";

export default function Home() {
  return (
    <>
      <main
        style={{
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "4rem",
        }}
      >
        <Nav />

        <div
          className="container"
          style={{
            marginTop: "12rem",
            width: "85%",
          }}
        >
          <div className={styles.scrollbar}></div>
          <div className={styles.content}>
            <div className={styles.titleHolder}>
              <div>
                <h1 style={{ lineHeight: "1.2" }}>
                  Visualize Tech
                  <br />
                  Stacks with Impact
                </h1>
                <hr />
                <h2>
                  Stack is a platform designed to help developers showcase their
                  tech stacks.
                </h2>
                <div className={styles.signupHolder}>
                  <Link className={styles.buttonLarge} href="/profile">
                    Get Started
                  </Link>
                  <Link className={styles.buttonLargeWhite} href="/profile">
                    Explore Stacks
                  </Link>
                </div>
              </div>
              <Image
                src={"/test.svg"}
                width="400"
                height="0"
                alt="profile-img"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div className={styles.logoHolder}>
              <Image
                src={"/github-text.svg"}
                width="150"
                height="100"
                alt="profile-img"
              />
              <Image
                src={"/nextjs-text.svg"}
                width="150"
                height="100"
                alt="profile-img"
              />
              <Image
                src={"/nodejs-text.svg"}
                width="150"
                height="100"
                alt="profile-img"
              />
              <Image
                src={"/mongo-text.svg"}
                width="150"
                height="100"
                alt="profile-img"
              />
            </div>

            <div className={styles.fade}>
              <div className={styles.hover}>
                <div className={styles.leftTop}></div>
                <div className={styles.leftBottom}></div>
                <div className={styles.rightTop}></div>
                <div className={styles.rightBottom}></div>
                <div className={styles.hoverContainer}>
                  <h2>
                    Stack creates a meeting place between developers and
                    designers.
                    <br />
                    Stacks display all of your application&apos;s most important
                    details, in an aesthetic and easy to understand way.
                  </h2>
                </div>
              </div>
            </div>

            <div className={styles.fade}>
              <span className={styles.heading}>
                <i className="fa-brands fa-github"></i>&nbsp;GitHub
              </span>
              <hr />
              <h2>
                Stack was specifically designed with GitHub integration in mind,
                so you can quickly showcase your GitHub projects and get back to
                programming.
              </h2>
            </div>

            <div className={styles.fade} style={{ marginTop: "0" }}>
              <StackHeader />
            </div>

            <div className={styles.fade}>
              <div className={styles.hover}>
                <div className={styles.leftTop}></div>
                <div className={styles.leftBottom}></div>
                <div className={styles.rightTop}></div>
                <div className={styles.rightBottom}></div>
                <div className={styles.hoverContainer}>
                  <h2>
                    Every Stack displays the technology used in the production
                    of your applications.
                    <br />
                    Image uploads allow for Stacks to showcase exactly how your
                    applications look.
                  </h2>
                </div>
              </div>
            </div>

            <div className={styles.fade}>
              <span className={styles.heading}>
                <i className="fa-regular fa-face-smile"></i>&nbsp;Community
              </span>
              <hr />
              <h2>
                Connect with other developers and explore popular Stacks from
                the community.
              </h2>
            </div>

            <div
              className={styles.fade}
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div className={styles.hover}>
                <div className={styles.leftTop}></div>
                <div className={styles.leftBottom}></div>
                <div className={styles.rightTop}></div>
                <div className={styles.rightBottom}></div>
                <div
                  className={styles.hoverContainer}
                  style={{ paddingBlock: "4rem" }}
                >
                  <div className={styles.exploreContainer}>
                    <Image
                      src={"/image.png"}
                      width="415"
                      height="265"
                      alt="profile-img"
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                      }}
                    />
                    <div className={styles.exploreCard}>
                      <div className={styles.exploreAlign}>
                        <Image
                          src={"/noprofile.png"}
                          width="25"
                          height="25"
                          alt="profile-img"
                          style={{
                            borderRadius: "50px",
                            marginRight: "0.2rem",
                          }}
                        />
                        <p style={{ fontWeight: "500", fontSize: "16px" }}>
                          Code Tracker
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa-solid fa-heart fa-sm"
                          style={{ color: "red" }}
                        ></i>
                        <p style={{ fontWeight: "500", fontSize: "12px" }}>
                          &ensp;9.9k
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.hover}>
                <div className={styles.leftTop}></div>
                <div className={styles.leftBottom}></div>
                <div className={styles.rightTop}></div>
                <div className={styles.rightBottom}></div>
                <div
                  className={styles.hoverContainer}
                  style={{ paddingBlock: "4rem" }}
                >
                  <div className={styles.exploreContainer}>
                    <Image
                      src={"/image.png"}
                      width="415"
                      height="265"
                      alt="profile-img"
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                      }}
                    />
                    <div className={styles.exploreCard}>
                      <div className={styles.exploreAlign}>
                        <Image
                          src={"/noprofile.png"}
                          width="25"
                          height="25"
                          alt="profile-img"
                          style={{
                            borderRadius: "50px",
                            marginRight: "0.2rem",
                          }}
                        />
                        <p style={{ fontWeight: "500", fontSize: "16px" }}>
                          Code Tracker
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa-solid fa-heart fa-sm"
                          style={{ color: "red" }}
                        ></i>
                        <p style={{ fontWeight: "500", fontSize: "12px" }}>
                          &ensp;9.9k
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={styles.fade}
              style={{
                marginTop: "2rem",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link className={styles.buttonLarge} href="/explore">
                Explore
              </Link>
            </div>

            <div
              className={styles.fade}
              style={{
                marginTop: "10rem",
              }}
            >
              <div className={styles.hover}>
                <div className={styles.leftTop}></div>
                <div className={styles.leftBottom}></div>
                <div className={styles.rightTop}></div>
                <div className={styles.rightBottom}></div>
                <div className={styles.hoverContainer}>
                  <h2>
                    Every Stack displays the technology used in the production
                    of your applications.
                    <br />
                    Image uploads allow for Stacks to showcase exactly how your
                    applications look.
                  </h2>
                </div>
              </div>
            </div>

            <div className={styles.fade}>
              <span className={styles.heading}>
                <i className="fa-solid fa-hands"></i>
                &nbsp;Stack
              </span>
              <hr />
              <h2>
                GitHub integration allows for a high standard for each and every
                Stack created.
                <br />
                Sign in with GitHub to start Stacking today!
              </h2>
            </div>
            <div
              className={styles.fade}
              style={{
                marginTop: "2rem",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link className={styles.buttonLarge} href="/profile">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
