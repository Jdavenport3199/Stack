import styles from "./page.module.css";
import Nav from "../components/Nav";
import StackHeader from "../components/StackHeader";
import StackImages from "../components/StackImages";
import StackMore from "../components/StackMore";
import { useState } from "react";

export default function Stack() {
  return (
    <>
      <main>
        <Nav />

        <div className="container" style={{ paddingTop: "0" }}>
          <StackHeader />
          <StackImages />
          <StackMore />

          <dialog className={styles.dialog}>
            <div className={styles.dialogContent}>
              <p>
                Stack regularly pulls information from GitHub repositories,
                ensuring that all related content is kept up-to-date with the
                latest GitHub changes. Expect a delay of up to 30 minutes for
                any changes made on GitHub to be fully integrated and reflected
                on the Stack website. This delay might be due to scheduled
                synchronization intervals, processing time, or other factors
                involved in the data integration process. During this time
                frame, users should anticipate that the website&apos;s data will
                gradually align with the most recent updates from the GitHub
                repositories.
              </p>
              <form method="dialog" className={styles.dialogButton}>
                <button>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </main>
    </>
  );
}
