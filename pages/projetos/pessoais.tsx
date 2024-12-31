import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import styles from './pessoais.module.css';
import { motion } from "framer-motion";

export default function Pessoais() {
    return (
        <div>
            <Head>
                <title>saber evolve - Projetos pessoais</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header/>
            <motion.div
                className={styles.divPessoais}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Pessoais</h1>
            </motion.div>
            <Footer/>
        </div>
    );
}