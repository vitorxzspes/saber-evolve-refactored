import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import { motion } from "framer-motion";
import styles from './sobre.module.css';

export  default function Sobre() {
    return (
        <div>
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