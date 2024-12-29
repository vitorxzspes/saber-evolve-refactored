import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import styles from './privacidade.module.css';
import { motion } from "framer-motion";

export default function Privacidade() {
    return (
        <div>
            <Head>
                <title>saber evolve - Privacidade</title>
            </Head>
            <Header />
            <motion.div
                className={styles.divPrivacidade}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Privacidade</h1>
                <p>Em breve...</p>
            </motion.div>
            <Footer />
        </div>
    );
};