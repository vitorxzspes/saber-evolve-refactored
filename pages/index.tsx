// IMPORTANDO COMPONENTS
import { Header } from "../src/app/Components/Header/page";
import { Footer } from "../src/app/Components/Footer/page";

import Head from "next/head";
import styles from './home.module.css';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>saber evolve - Home</title>
      </Head>      
      <Header />
      <motion.div
          className={styles.divHome}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          <h1>Home</h1>
      </motion.div>
      <Footer />
    </div>
  );
}