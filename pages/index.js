import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Download PDF File - Public Directory</title>
        <meta
          name="description"
          content="Download PDF File - Public Directory"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <a
            href="/dummy.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        </p>
      </main>
    </div>
  );
}
