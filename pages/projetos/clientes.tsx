import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import styles from './clientes.module.css';
import { motion } from "framer-motion";

export default function Clientes() {
    return (
        <div>
            <Head>
                <title>saber evolve - Projetos de clientes</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header/>
            <motion.div
                className={styles.divClientes}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Clientes</h1>
            </motion.div>
            <Footer/>
        </div>
    );
}