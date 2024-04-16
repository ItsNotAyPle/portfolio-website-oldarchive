import Layout from "./Layout";
import React from "react";
import styles from "../styles/components/LoadingScreen.module.css";
import Image from "next/image";
import loadingImage from "../public/loading.png";

const LoadingScreen = () => {
  return (
    <div className={styles.master}>
      <Image src={loadingImage} alt="Picture of the author" />
    </div>
  );
}

export default LoadingScreen;
