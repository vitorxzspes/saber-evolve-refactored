import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import styles from './sobre.module.css';
import { motion } from "framer-motion";

export  default function Sobre() {
    return (
        <div>
            <Head>
                <title>saber evolve - Sobre</title>
            </Head>
            <Header />
            <motion.div
                className={styles.divSobre}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Sobre</h1>
                <p>Este é um projeto de exemplo para demonstrar o uso do Next.js com TypeScript.</p>
            </motion.div>
            <Footer />
        </div>
    );
}