import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import Image from "next/image";
import styles from './downloads.module.css';
import { motion } from "framer-motion";

export default function Downloads() {
    return (
        <div>
            <Head>
                <title>saber evolve - Downloads</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header />
            <motion.div
                className={styles.divDownloads}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Downloads</h1>
                <p>aqui vou deixar os downloads dos meus projetos</p>
                
                <div className={styles.divDownloadsMain}>
                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Pessoais</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <p>ola mundo!</p>
                        </div>
                    </div>

                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Rocketseat</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <p>ola mundo!</p>
                        </div>
                    </div>

                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Clientes</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <p>ola mundo!</p>
                        </div>
                    </div>

                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Mobile</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <p>ola mundo!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};