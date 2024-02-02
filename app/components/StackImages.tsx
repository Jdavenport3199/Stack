"use client";
import styles from "../stack/page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StackImages() {
  const [image, setImage] = useState(0);
  const [imageSource, setImageSource] = useState("");

  function displayImage() {
    if (image === 0) {
      setImageSource("/image.png");
    } else if (image === 1) {
      setImageSource("/image2.png");
    } else if (image === 2) {
      setImageSource("/image3.png");
    } else if (image === 3) {
      setImageSource("/image4.png");
    }
    return;
  }

  useEffect(() => {
    displayImage();
  });

  return (
    <>
      <div className="content">
        <Image
          className={styles.imageMain}
          src={imageSource}
          width={0}
          height={0}
          sizes="100vw"
          alt="profile-img"
        />

        <div className={styles.imageThumbnailHolder}>
          <Image
            className="img-thumbnail"
            src={"/image.png"}
            width="150"
            height="100"
            alt="profile-img"
            onClick={() => setImage(0)}
          />
          <Image
            className="img-thumbnail"
            src={"/image2.png"}
            width="150"
            height="100"
            alt="profile-img"
            onClick={() => setImage(1)}
          />
          <Image
            className="img-thumbnail"
            src={"/image3.png"}
            width="150"
            height="100"
            alt="profile-img"
            onClick={() => setImage(2)}
          />
          <Image
            className="img-thumbnail"
            src={"/image4.png"}
            width="150"
            height="100"
            alt="profile-img"
            onClick={() => setImage(3)}
          />
        </div>
      </div>
    </>
  );
}
