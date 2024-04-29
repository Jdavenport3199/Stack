import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav">
      <div className="navLeft">
        <Link href="/">
          <span>Stack</span>
        </Link>
        <Link href="/explore">Explore</Link>
        <Link href="/create">Create</Link>
      </div>
      <div className="navRight">
        <Link href="/profile" style={{ padding: "0rem" }}>
          <Image
            className="img-profile"
            src={"/noprofile.png"}
            width="40"
            height="40"
            alt="profile-img"
          />
        </Link>
      </div>
    </div>
  );
}
