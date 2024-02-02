import styles from "../signin/page.module.css";
import Link from "next/link";

export default function SigninForm() {
  return (
    <>
      <div className="content">
        <div className={styles.form}>
          <div className={styles.formIcon}>
            <i className="fa-brands fa-github fa-2xl"></i>
          </div>
          <p>
            Stack is powered by GitHub.
            <br />
            Sign in with GitHub to start Stacking.
          </p>

          <Link href="/signin" className={styles.linkButton}>
            Sign In
          </Link>

          <div>
            <p>New to GitHub?</p>
            <Link
              href="https://github.com/signup"
              target="_blank"
              className={styles.linkText}
            >
              Create an Account.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
