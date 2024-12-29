import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import styles from './rocketseat.module.css';
import { motion } from "framer-motion";

export default function Rocketseat() {
    return (
        <div>
            <Head>
                <title>saber evolve - Projetos da Rocketseat</title>
            </Head>
            <Header/>
            <motion.div
                className={styles.divRocketseat}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Rocketseat</h1>
            </motion.div>
            <Footer/>
        </div>
    );
}