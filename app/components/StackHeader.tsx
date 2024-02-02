"use client";
import styles from "../stack/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";

export default function StackHeader() {
  const [extraCommits, setExtraCommits] = useState<boolean>(false);
  const [commitContainer, setCommitContainer] = useState<boolean>(false);
  const toggleShowCommits = () => {
    setExtraCommits(!extraCommits);
    setCommitContainer(!commitContainer);
  };
  const extraCommitsStyles: React.CSSProperties = {
    maxHeight: extraCommits ? "fit-content" : "0rem",
    opacity: extraCommits ? 1 : 0,
    transition: extraCommits ? "500ms ease-in-out" : "150ms ease-in-out",
  };
  const commitContainerStyles: React.CSSProperties = {
    height: commitContainer ? "22rem" : "8.75rem",
  };

  const [showShare, setShowShare] = useState<boolean>(false);
  const toggleShowShares = () => {
    setShowShare(!showShare);
    console.log("test");
  };
  const showShareStyles: React.CSSProperties = {
    display: showShare ? "block" : "none",
  };

  const [showSettings, setShowSettings] = useState<boolean>(false);
  const toggleShowSettings = () => {
    setShowSettings(!showSettings);
    console.log("test");
  };
  const showSettingsStyles: React.CSSProperties = {
    display: showSettings ? "block" : "none",
  };

  return (
    <>
      <dialog open className={styles.dialogShare} style={showShareStyles}>
        <div className={styles.dialogContentHolder}>
          <div className={styles.dialogContent}>
            <div
              className={styles.profileButtonHolder}
              style={{ gap: "1rem", marginTop: "0.6rem" }}
            >
              <div>
                <button className={styles.shareButtonActive}>
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
                <p>&ensp;Email</p>
              </div>
              <div>
                <button className={styles.shareButtonActive}>
                  <i className="fa-brands fa-x-twitter"></i>
                </button>
                <p>&ensp;X</p>
              </div>
              <div>
                <button className={styles.shareButtonActive}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
                <p>&ensp;LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.dialogTitle}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
          &ensp;SHARE
        </p>
        <button onClick={toggleShowShares} className={styles.dialogButton}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </dialog>

      <dialog open className={styles.dialogShare} style={showSettingsStyles}>
        <div className={styles.dialogContentHolder}>
          <div className={styles.dialogContent}>
            <div
              className={styles.profileButtonHolder}
              style={{ gap: "1rem", marginTop: "0.6rem" }}
            >
              <div>
                <button className={styles.shareButtonActive}>
                  <i className="fa-solid fa-wand-magic"></i>
                </button>
                <p>&ensp;Edit Stack</p>
              </div>
              <div>
                <button className={styles.likeButtonActive}>
                  <i className="fa-solid fa-ban"></i>
                </button>
                <p>&ensp;Delete Stack</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.dialogTitle}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
          &ensp;SETTINGS
        </p>
        <button onClick={toggleShowSettings} className={styles.dialogButton}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </dialog>

      <div className={styles.headerHolder}>
        <div className={styles.header}>
          <div className={styles.profile}>
            <Link href="/profile" style={{ padding: "0rem" }}>
              <Image
                className={styles.profileImage}
                src={"/noprofile.png"}
                width="50"
                height="50"
                alt="profile-img"
              />
            </Link>
            <div className={styles.profileTextHolder}>
              <p className={styles.profileTextTitle}>Test Developer</p>
              <p className={styles.profileTextUsername}>@testdev</p>
            </div>
          </div>
          <div className={styles.profileButtonHolder}>
            <div>
              <button className={styles.likeButtonActive}>
                <i className="fa-solid fa-heart fa-sm"></i>
              </button>
              <p>&ensp;9.9k</p>
            </div>
            <div>
              <button
                className={styles.shareButtonActive}
                onClick={toggleShowShares}
              >
                <i className="fa-solid fa-share-nodes"></i>
              </button>
              {/* <p>&ensp;Share</p> */}
            </div>
            <div>
              <button
                className={styles.shareButton}
                onClick={toggleShowSettings}
              >
                <i className="fa-solid fa-gear fa-sm"></i>
              </button>
              {/* <p>&ensp;Settings</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="content" style={{ borderTop: "0px", marginTop: "0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span>Code Tracker</span>

            <div style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fa-solid fa-link fa-2xs"
                style={{ color: "#171d1c" }}
              ></i>
              <Link href="" style={{ padding: "0", color: "#2667ff" }}>
                &nbsp;www.codetracker.com
              </Link>
            </div>
          </div>
          <div className={styles.topicHolder}>
            <p className={styles.topic}>App</p>
            <p className={styles.topic}>Software</p>
            <p className={styles.topic}>Development</p>
            <p className={styles.topic}>Program</p>
          </div>
        </div>
        <hr />
        <div style={{ marginTop: "0.4rem" }}>
          <p>
            CodeTracker empowers developers to maintain a comprehensive record
            of their coding endeavors, fostering better project management
            collaboration, and knowledge sharing. With its intuitive interface,
            robust features, and powerful integrations, CodeTracker is the
            must-have companion for any developer looking to stay organized and
            efficient in their coding journey.
          </p>
        </div>
        <hr />

        <div className={styles.commitContainer} style={commitContainerStyles}>
          <p className="subtitle">
            <i className="fa-solid fa-ellipsis-vertical"></i>&ensp;COMMIT
            HISTORY
          </p>

          <div
            className={styles.profileButtonHolder}
            style={{ marginTop: "0.4rem", gap: "0" }}
          >
            <div className={styles.commitBranch}>
              <p className={styles.commitBranchText}>
                <i className="fa-solid fa-code-branch"></i>&ensp;master
              </p>
            </div>
            <button onClick={toggleShowCommits} style={{ fontSize: "12px" }}>
              View More&nbsp;<i className="fa-solid fa-chevron-down fa-xs"></i>
            </button>
          </div>

          <div className={styles.commitRow}>
            <p className={styles.commitRowMessage}>
              <i className="fa-solid fa-code-commit"></i>&ensp;stable
            </p>

            <div>
              <p className={styles.commitRowSha}>7eacff9</p>
              <p className={styles.commitRowDate}>
                &ensp;&middot;&ensp;1 months ago
              </p>
              <button className={styles.commitRowButton}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>

          <div className={styles.extraCommits} style={extraCommitsStyles}>
            <div className={styles.commitRow}>
              <p className={styles.commitRowMessage}>
                <i className="fa-solid fa-code-commit"></i>&ensp;stable
              </p>

              <div>
                <p className={styles.commitRowSha}>7eacff9</p>
                <p className={styles.commitRowDate}>
                  &ensp;&middot;&ensp;1 months ago
                </p>
                <button className={styles.commitRowButton}>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>

            <div className={styles.commitRow}>
              <p className={styles.commitRowMessage}>
                <i className="fa-solid fa-code-commit"></i>&ensp;stable
              </p>

              <div>
                <p className={styles.commitRowSha}>7eacff9</p>
                <p className={styles.commitRowDate}>
                  &ensp;&middot;&ensp;1 months ago
                </p>
                <button className={styles.commitRowButton}>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>

            <div className={styles.commitRow}>
              <p className={styles.commitRowMessage}>
                <i className="fa-solid fa-code-commit"></i>&ensp;stable
              </p>

              <div>
                <p className={styles.commitRowSha}>7eacff9</p>
                <p className={styles.commitRowDate}>
                  &ensp;&middot;&ensp;1 months ago
                </p>
                <button className={styles.commitRowButton}>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>
            <div className={styles.commitRow}>
              <p className={styles.commitRowMessage}>
                <i className="fa-solid fa-code-commit"></i>&ensp;stable
              </p>

              <div>
                <p className={styles.commitRowSha}>7eacff9</p>
                <p className={styles.commitRowDate}>
                  &ensp;&middot;&ensp;1 months ago
                </p>
                <button className={styles.commitRowButton}>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.techContainer}>
          <div className={styles.techHolder}>
            <p className="subtitle">
              <i className="fa-solid fa-ellipsis-vertical"></i>
              &ensp;LANGUAGES
            </p>
            <div className={styles.tech}>
              <div className={styles.techDetails}>
                <Image
                  className={styles.techImage}
                  src={"/javascript.svg"}
                  width="60"
                  height="60"
                  alt="profile-img"
                />
                {/* <p className={styles.techSubtitle}>JavaScript</p> */}
                <div className={styles.techTooltip}>
                  <p className="title">JavaScript</p>
                  <hr />
                  <p>
                    JavaScript was created by Brendan Eich while working at
                    Netscape Communications Corporation in 1995. Initially named
                    &quot;Mocha&quot; and later &quot;LiveScript,&quot; it was eventually renamed
                    JavaScript to capitalize on the popularity of Java at that
                    time. Despite its name, JavaScript is a distinct language
                    from Java, and they have different purposes and design
                    principles.
                  </p>
                  <hr />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <i className="fa-solid fa-arrow-pointer fa-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.techHolder}>
            <p className="subtitle">
              <i className="fa-solid fa-ellipsis-vertical"></i>
              &ensp;DATABASES
            </p>
            <div className={styles.tech}>
              <div className={styles.techDetails}>
                <Image
                  className={styles.techImage}
                  src={"/mongodb.svg"}
                  width="60"
                  height="60"
                  alt="profile-img"
                />
                {/* <p className={styles.techSubtitle}>MongoDB</p> */}
                <div className={styles.techTooltip}>
                  <p className="title">MongoDB</p>
                  <hr />
                  <p>
                    MongoDB is a widely-used, open-source NoSQL database that
                    provides a flexible and scalable approach to handling and
                    storing data. Developed by MongoDB Inc., it is designed to
                    handle large amounts of unstructured or semi-structured data
                    and is particularly well-suited for applications that
                    require high performance, horizontal scaling, and a dynamic
                    schema.
                  </p>
                  <hr />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <i className="fa-solid fa-arrow-pointer fa-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.techHolder}>
            <p className="subtitle">
              <i className="fa-solid fa-ellipsis-vertical"></i>&ensp;APIs
            </p>
            <div className={styles.tech}>
              <div className={styles.techDetails}>
                <Image
                  className={styles.techImage}
                  src={"/spotify.svg"}
                  width="60"
                  height="60"
                  alt="profile-img"
                />
                {/* <p className={styles.techSubtitle}>Spotify</p> */}
                <div className={styles.techTooltip}>
                  <p className="title">Spotify</p>
                  <hr />
                  <p>
                    The Spotify API enables developers to integrate music
                    streaming and related functionalities into their
                    applications. With authentication through OAuth 2.0,
                    developers can access a rich set of data to enhance user
                    experiences, including information about tracks, albums,
                    playlists, and user profiles.
                  </p>
                  <hr />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <i className="fa-solid fa-arrow-pointer fa-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.techHolder}>
            <p className="subtitle">
              <i className="fa-solid fa-ellipsis-vertical"></i>
              &ensp;FRAMEWORKS
            </p>
            <div className={styles.tech}>
              <div className={styles.techDetails}>
                <Image
                  className={styles.techImage}
                  src={"/nextjs.svg"}
                  width="60"
                  height="60"
                  alt="profile-img"
                />
                {/* <p className={styles.techSubtitle}>Next.js</p> */}
                <div className={styles.techTooltip}>
                  <p className="title">Next.js</p>
                  <hr />
                  <p>
                    Next.js is a powerful and open-source React framework for
                    building modern web applications. Developed by Vercel, it
                    simplifies the process of creating server-side rendered
                    React applications with ease. Next.js offers a streamlined
                    development experience, providing features like automatic
                    code splitting, server-side rendering, and an intuitive
                    page-based routing system. Its flexibility and performance
                    optimization make it a popular choice for building dynamic,
                    fast, and SEO-friendly web applications.
                  </p>
                  <hr />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <i className="fa-solid fa-arrow-pointer fa-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.techHolder}>
            <p className="subtitle">
              <i className="fa-solid fa-ellipsis-vertical"></i>&ensp;CLOUD
              SERVICES
            </p>
            <div className={styles.tech}>
              <div className={styles.techDetails}>
                <Image
                  className={styles.techImage}
                  src={"/AWS.svg"}
                  width="60"
                  height="60"
                  alt="profile-img"
                />
                {/* <p className={styles.techSubtitle}>AWS</p> */}
                <div className={styles.techTooltip}>
                  <p className="title">AWS</p>
                  <hr />
                  <p>
                    Amazon Web Services (AWS) is a comprehensive and widely
                    adopted cloud computing platform provided by Amazon. It
                    offers a vast array of scalable and on-demand services,
                    including computing power, storage, databases, machine
                    learning, analytics, and more. AWS enables businesses and
                    developers to access and utilize computing resources without
                    the need for upfront investment or long-term commitments.
                  </p>
                  <hr />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <i className="fa-solid fa-arrow-pointer fa-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
