import styles from "./page.module.css";
import Nav from "../components/Nav";
import SigninForm from "../components/SigninForm";

export default function SignIn() {
  return (
    <>
      <main style={{ alignItems: "center" }}>
        <Nav />

        <div
          className="container"
          style={{ width: "25%", minWidth: "fit-content" }}
        >
          <SigninForm />
        </div>
      </main>
    </>
  );
}
