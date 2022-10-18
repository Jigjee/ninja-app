import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keyword" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Dolore ea cupidatat proident cupidatat ad in aliqua elit pariatur
          dolor consectetur dolor excepteur. Pariatur cillum eiusmod irure
          deserunt. Magna culpa adipisicing sint cillum elit veniam excepteur
          est tempor pariatur eu fugiat occaecat. Minim ea enim eu ea est
          proident labore non aute laborum consequat fugiat nulla. Commodo quis
          culpa fugiat minim. Tempor eu in aute nisi non magna ullamco ut
          exercitation voluptate nulla occaecat laborum. Consequat sit excepteur
          deserunt ad.
        </p>
        <p className={styles.text}>
          Dolore ea cupidatat proident cupidatat ad in aliqua elit pariatur
          dolor consectetur dolor excepteur. Pariatur cillum eiusmod irure
          deserunt. Magna culpa adipisicing sint cillum elit veniam excepteur
          est tempor pariatur eu fugiat occaecat. Minim ea enim eu ea est
          proident labore non aute laborum consequat fugiat nulla. Commodo quis
          culpa fugiat minim. Tempor eu in aute nisi non magna ullamco ut
          exercitation voluptate nulla occaecat laborum. Consequat sit excepteur
          deserunt ad.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
