import styles from "./page.module.css";
import Nav from "../components/Nav";
import ExploreGrid from "../components/ExploreGrid";

export default function Explore() {
  return (
    <>
      <main>
        <Nav />

        <div className="container" style={{ width: "100%" }}>
          <ExploreGrid />
        </div>
      </main>
    </>
  );
}
