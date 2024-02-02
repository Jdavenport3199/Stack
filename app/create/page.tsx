import styles from "./page.module.css";
import Nav from "../components/Nav";
import CreateForm from "../components/CreateForm";

export default function Create() {
  return (
    <>
      <main>
        <Nav />

        <div
          className="container"
          style={{ width: "25%", minWidth: "fit-content" }}
        >
          <CreateForm />
        </div>
      </main>
    </>
  );
}
